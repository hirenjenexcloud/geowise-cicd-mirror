const Device = require('../models/device.model');
const { success, fail } = require("../utils/apiResponse");
const { buildQuery } = require("../utils/queryBuilder");

exports.transferDevices = async (req, res) => {
    try {
        const { fromUserId, toUserId, imeiList } = req.body;

        // Validate input
        if (!fromUserId || !toUserId || !imeiList || imeiList.length === 0) {
            return fail(res, "INVALIDSYNTAX", "fromUserId, toUserId, and imeiList are required");
        }

        // Update devices ownership
        const result = await Device.updateMany(
            { imei: { $in: imeiList }, userId: fromUserId },
            { $set: { userId: toUserId } }
        );

        console.log(result);
        

        if (result.modifiedCount === 0) {
            return fail(res, "NOTFOUND", "No devices found to transfer");
        }

        success(res, "OK", "Devices transferred successfully", { transferredCount: result.modifiedCount }); 

        

    } catch (error) {
        fail(res, "INTERNALSERVERERROR", error.message);
    }
}