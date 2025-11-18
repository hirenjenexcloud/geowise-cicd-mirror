// controllers/firmware.controller.js
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const Firmware = require('../models/firmware.model');
const { success, fail } = require("../utils/apiResponse");

const UPLOADS_ROOT = path.join(__dirname, '../uploads');
const PACKET_SIZE = 2048;

if (!fs.existsSync(UPLOADS_ROOT)) fs.mkdirSync(UPLOADS_ROOT, { recursive: true });
async function getNextFolderId() {
  const items = await fs.promises.readdir(UPLOADS_ROOT, { withFileTypes: true });
  const nums = items
    .filter(d => d.isDirectory())
    .map(d => Number(d.name))
    .filter(n => Number.isInteger(n) && n >= 0);
  const max = nums.length ? Math.max(...nums) : 0;
  return String(max + 1);
}

function checksum16_from_stream_buffer(buf) {
  let sum = 0;
  for (let i = 0; i < buf.length; i++) {
    sum = (sum + buf[i]) & 0xffff;
  }
  return sum;
}

async function compute_file_checksum_and_size(filePath) {
  return new Promise((resolve, reject) => {
    let size = 0;
    let sum = 0;
    const rs = fs.createReadStream(filePath);
    rs.on('data', (chunk) => {
      size += chunk.length;
      for (let i = 0; i < chunk.length; i++) {
        sum = (sum + chunk[i]) & 0xffff;
      }
    });
    rs.on('end', () => resolve({ size, checksum: sum & 0xffff }));
    rs.on('error', reject);
  });
}

exports.createFirmwares = async (req, res) => {
  try {
    // ---------------------------------------------------------
    // 0) VALIDATE INPUT
    // ---------------------------------------------------------
    // Must have: file + firmName + swVersion
    if (!req.file || !req.body.firmName || !req.body.swVersion) {
      return fail(res, "NOTFOUND", "Missing firmware file or metadata");
    }

    const tmpPath = req.file.path;
    const origName = req.file.originalname;

    // ---------------------------------------------------------
    // 1) PREPARE DESTINATION FOLDER
    // ---------------------------------------------------------
    const folderId = await getNextFolderId();
    const destFolder = path.join(UPLOADS_ROOT, folderId);

    // Ensure folder exists
    await fs.promises.mkdir(destFolder, { recursive: true });

    // ---------------------------------------------------------
    // 2) COMPUTE ORIGINAL SIZE + CHECKSUM
    // ---------------------------------------------------------
    // checksum → lower 16 bits used in header
    const { size: origSize, checksum: fileChecksum } =
      await compute_file_checksum_and_size(tmpPath);

    // Total bytes = header (6 bytes) + firmware file bytes
    const totalLength = 4 + 2 + origSize;

    // ---------------------------------------------------------
    // 3) BUILD HEADER (6 bytes)
    // ---------------------------------------------------------
    // [0-3] → Total length (UInt32 BE)
    // [4-5] → Checksum (UInt16 BE)
    const headerBuf = Buffer.alloc(6);
    headerBuf.writeUInt32BE(totalLength, 0);
    headerBuf.writeUInt16BE(fileChecksum & 0xffff, 4);

    // ---------------------------------------------------------
    // 4) STREAM HEADER + FILE DATA INTO PACKETS
    // ---------------------------------------------------------
    const rs = fs.createReadStream(tmpPath);

    let acc = Buffer.alloc(0);  // accumulation buffer
    let packetIndex = 0;        // packet counter

    // Helper: write a single packet file
    async function writePacket(index, buffer) {
      const fileName = `packet${index}.bin`;
      const filePath = path.join(destFolder, fileName);
      await fs.promises.writeFile(filePath, buffer);
    }

    // Flush accumulated bytes into PACKET_SIZE chunks
    async function flushAccumulated(allowPartial = false) {
      while (acc.length >= PACKET_SIZE) {
        packetIndex++;
        const pkt = acc.slice(0, PACKET_SIZE);
        acc = acc.slice(PACKET_SIZE);
        await writePacket(packetIndex, pkt);
      }

      // Final partial packet
      if (allowPartial && acc.length > 0) {
        packetIndex++;
        await writePacket(packetIndex, acc);
        acc = Buffer.alloc(0);
      }
    }

    // Add header as first bytes of data stream
    acc = Buffer.concat([acc, headerBuf]);

    // Process file stream
    await new Promise((resolve, reject) => {
      rs.on("data", async (chunk) => {
        try {
          rs.pause(); // avoid memory overflow during flush

          acc = Buffer.concat([acc, chunk]);

          await flushAccumulated(false);

          rs.resume();
        } catch (err) {
          reject(err);
        }
      });

      rs.on("end", async () => {
        try {
          // write remaining partial packet
          await flushAccumulated(true);
          resolve();
        } catch (err) {
          reject(err);
        }
      });

      rs.on("error", reject);
    });

    // ---------------------------------------------------------
    // 5) SAVE META FILE
    // ---------------------------------------------------------
    const meta = {
      folderId,
      originalName: origName,
      originalSize: origSize,
      totalLength,
      fileChecksum,
      packets: packetIndex,
      createdAt: new Date().toISOString(),
    };

    await fs.promises.writeFile(
      path.join(destFolder, "meta.json"),
      JSON.stringify(meta, null, 2)
    );

    // ---------------------------------------------------------
    // 6) MOVE ORIGINAL FILE INTO FOLDER (OPTIONAL)
    // ---------------------------------------------------------
    await fs.promises.rename(tmpPath, path.join(destFolder, origName));

    logger.info(`Firmware uploaded: folder ${folderId}, packets ${packetIndex}`);

    // ---------------------------------------------------------
    // 7) SAVE FIRMWARE DOCUMENT (MongoDB)
    // ---------------------------------------------------------
    await new Firmware({
      firmName: req.body.firmName,
      firmId: folderId,
      swVersion: req.body.swVersion,
    }).save();

    return success(res, "CREATED", "Firmware created");

  } catch (err) {
    // MongoDB duplicate key
    if (err.name === "MongoServerError" && err.code === 11000) {
      return fail(res, "INVALIDSYNTAX", "Duplicate key error", err.message);
    }

    // Validation errors
    if (err.name === "ValidationError") {
      return fail(res, "INVALIDSYNTAX", "Validation failed", err.message);
    }

    // Other errors
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// ---------------------------------------------------------------------
// GET: Fetch all firmwares (sorted latest first)
// ---------------------------------------------------------------------
exports.getAllFirmwares = async (req, res) => {
  try {
    // Fetch all firmware docs sorted by creation date (newest first)
    const firmwares = await Firmware.find().sort({ createdAt: -1 });

    return success(res, "OK", "Firmware list fetched", firmwares);

  } catch (err) {
    // Unexpected server error
    return fail(res, "SERVER_ERROR", "Server error", err.message);
  }
};


// ---------------------------------------------------------------------
// GET: Fetch single firmware by MongoDB ID
// ---------------------------------------------------------------------
exports.getFirmwaresById = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate id
    if (!id) {
      return fail(res, "INVALIDSYNTAX", "Missing id param");
    }

    // Fetch record
    const doc = await Firmware.findById(id).lean();

    if (!doc) {
      return fail(res, "NOTFOUND", "Firmware not found");
    }

    return success(res, "OK", "Firmware fetched", doc);

  } catch (err) {
    return fail(res, "SERVER_ERROR", "Server error", err.message);
  }
};


// ---------------------------------------------------------------------
// PUT/PATCH: Update firmware record by id
// ---------------------------------------------------------------------
exports.updateFirmwares = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate id
    if (!id) {
      return fail(res, "INVALIDSYNTAX", "Missing id param");
    }

    // Update record (runValidators ensures schema validation)
    const updated = await Firmware.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return fail(res, "NOTFOUND", "Firmware not found");
    }

    return success(res, "OK", "Firmware updated", updated);

  } catch (err) {
    // Mongoose validation failure
    if (err.name === "ValidationError") {
      return fail(res, "INVALIDSYNTAX", "Validation failed", err.message);
    }

    // Generic server error
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};


exports.deleteFirmwares = async (req, res) => {
  try {
    // ---------------------------------------------------------
    // 0) VALIDATE INPUT
    // ---------------------------------------------------------
    const id = req.params.id;
    if (!id) {
      return fail(res, "INVALIDSYNTAX", "Missing id param");
    }

    // ---------------------------------------------------------
    // 1) DELETE MONGO DOCUMENT
    // ---------------------------------------------------------
    const deleted = await Firmware.findByIdAndDelete(id).lean();
    if (!deleted) {
      return fail(res, "NOTFOUND", "Firmware not found");
    }

    // ---------------------------------------------------------
    // 2) DELETE THE UPLOAD FOLDER (firmId == folderId)
    // ---------------------------------------------------------
    const folderId = deleted.firmId;
    const folderPath = path.join(UPLOADS_ROOT, String(folderId));

    try {
      // delete folder recursively (Node 14+)
      await fs.promises.rm(folderPath, { recursive: true, force: true });
      logger.info(`Deleted firmware folder: ${folderPath}`);
    } catch (fsErr) {
      logger.error(`Failed to delete folder ${folderPath}`, fsErr);
      // still proceed — folder delete is not critical
    }

    // ---------------------------------------------------------
    // 3) SUCCESS RESPONSE
    // ---------------------------------------------------------
    return success(res, "OK", "Firmware deleted");

  } catch (err) {
    logger.error("Delete firmware error:", err);
    return fail(res, "SERVER_ERROR", "Server error", err.message);
  }
};
