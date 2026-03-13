const alert = require("../controllers/alert.contoller");

module.exports = {
    1: common,
    2: common,
    3: common,
    4: moving, // common + moving
    5: powerConnect, // common + power connect
    6: powerDisconnect, // common + power disconnect
};
 
async function common(packet, config) {
    console.log("------ Common event handler executed ------");
    await alert.checkBattery(packet, config);
}
 
async function moving(packet, config) {
    console.log("------ Moving event handler executed ------");
    await alert.checkSpeed(packet, config);
    common(packet, config);
}

async function powerConnect(packet, config) {
    console.log("------ powerConnect event handler executed ------");
    await alert.handlePowerConnect(packet, config);
    common(packet, config);
}

async function powerDisconnect(packet, config) {
    console.log("------ powerDisconnect event handler executed ------");
    await alert.handlePowerDisconnect(packet, config);
    common(packet, config);
}