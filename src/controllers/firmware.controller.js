// controllers/firmware.controller.js
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

const UPLOADS_ROOT = path.join(__dirname, '../uploads');
const PACKET_SIZE = 2048; // 2KB

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

exports.uploadOtaFile = async (req, res) => {
  try {
    // multer should provide req.file
    if (!req.file) {
      return res.status(400).json({ status: false, message: 'Firmware file is required' });
    }

    const tmpPath = req.file.path;
    const origName = req.file.originalname;

    // 1) choose folder id
    const folderId = await getNextFolderId();
    const destFolder = path.join(UPLOADS_ROOT, folderId);
    await fs.promises.mkdir(destFolder, { recursive: true });

    // 2) compute size & checksum (lower 16 bits)
    const { size: origSize, checksum: fileChecksum } = await compute_file_checksum_and_size(tmpPath);

    // total data length if you want header in front of file: 4 bytes(size) + 2 bytes(checksum) + origSize
    const totalLength = 4 + 2 + origSize;

    // header: 4-byte big-endian totalLength, 2-byte big-endian checksum
    const headerBuf = Buffer.alloc(6);
    headerBuf.writeUInt32BE(totalLength, 0);
    headerBuf.writeUInt16BE(fileChecksum & 0xffff, 4);

    // 3) stream header + file into packet files
    // We'll open a read stream for file, but first process header.
    const rs = fs.createReadStream(tmpPath);
    let acc = Buffer.alloc(0);
    let packetIndex = 0;

    // helper to write a packet file
    async function writePacket(idx, dataBuf) {
      const pktName = `packet${idx}.bin`;
      const pktPath = path.join(destFolder, pktName);
      await fs.promises.writeFile(pktPath, dataBuf);
    }

    // process header first (as if it's the first bytes of combined stream)
    acc = Buffer.concat([acc, headerBuf]);

    // function to consume accumulated buffer and write whole PACKET_SIZE packets
    async function flushAccumulated(allowPartialAtEnd = false) {
      while (acc.length >= PACKET_SIZE) {
        packetIndex++;
        const pkt = acc.slice(0, PACKET_SIZE);
        acc = acc.slice(PACKET_SIZE);
        await writePacket(packetIndex, pkt);
      }
      if (allowPartialAtEnd && acc.length > 0) {
        packetIndex++;
        // write last partial packet as-is (smaller than PACKET_SIZE)
        await writePacket(packetIndex, acc);
        acc = Buffer.alloc(0);
      }
    }

    // stream file, accumulate and flush
    await new Promise((resolve, reject) => {
      rs.on('data', async (chunk) => {
        try {
          acc = Buffer.concat([acc, chunk]);
          // flush synchronously by awaiting - to ensure order and not overwhelm fs
          // note: on 'data' event, calling await directly inside callback is tricky.
          // we'll pause stream while flushing to avoid too much memory growth.
          rs.pause();
          flushAccumulated(false).then(() => rs.resume()).catch(reject);
        } catch (err) {
          reject(err);
        }
      });

      rs.on('end', async () => {
        try {
          // flush remaining (last partial packet)
          await flushAccumulated(true);
          resolve();
        } catch (err) {
          reject(err);
        }
      });

      rs.on('error', reject);
    });

    // 4) write metadata file
    const meta = {
      folderId,
      originalName: origName,
      originalSize: origSize,
      totalLength,
      fileChecksum,
      packets: packetIndex,
      createdAt: new Date().toISOString()
    };

    await fs.promises.writeFile(path.join(destFolder, 'meta.json'), JSON.stringify(meta, null, 2));

    // 5) move original tmp file into folder (optional) for record
    const savedOriginalPath = path.join(destFolder, origName);
    await fs.promises.rename(tmpPath, savedOriginalPath);

    logger.info(`Firmware uploaded: folder ${folderId}, packets ${packetIndex}`);

    return res.status(200).json({
      status: true,
      message: 'Firmware uploaded and packetized',
      data: { folderId, packets: packetIndex, meta }
    });
  } catch (err) {
    logger.error('Firmware packetization error:', err);
    return res.status(500).json({ status: false, message: 'Server error', error: err.message });
  }
};
