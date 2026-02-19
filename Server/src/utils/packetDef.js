class AllPacketsDef {
    
    static packetDef = {
        imei: {
            size: 8,
            parser: hex => BigInt("0x" + hex).toString()
        },

        packetSize: {
            size: 2,
            parser: hex => parseInt(hex, 16)
        },

        eType: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        seqNumber: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        mainPower: {
            size: 2,
            parser: hex => parseInt(hex, 16) / 100 
        },

        batteryPower: {
            size: 2,
            parser: hex => parseInt(hex, 16) / 10 
        },

        rssi: {
            size: 1,
            parser: hex => {
                let v = parseInt(hex, 16);
                return v > 127 ? v - 256 : v;
            }
        },

        // lat: {
        //     size: 4,
        //     parser: hex => {
        //         let v = parseInt(hex, 16);
        //         return v / 1_000_000;
        //     }
        // },

        // lon: {
        //     size: 4,
        //     parser: hex => {
        //         let v = parseInt(hex, 16);
        //         return v / 1_000_000;
        //     }
        // },

        lat: {
            size: 4,
            parser: hex => {
                let value = parseInt(hex, 16);

                // Convert to signed 32-bit integer
                if (value & 0x80000000) {        // check sign bit
                    value = value ^ 0xFFFFFFFF;  // invert bits
                    value = (value + 1) * -1;    // two's complement
                }

                return value / 10000000;
            }
        },

        lon: {
            size: 4,
            parser: hex => {
                let value = parseInt(hex, 16);

                // Convert to signed 32-bit integer
                if (value & 0x80000000) {
                    value = value ^ 0xFFFFFFFF;
                    value = (value + 1) * -1;
                }

                return value / 10000000;
            }
        },


        hac: {
            size: 2,
            parser: hex => parseInt(hex, 16) / 100
        },

        totalSat: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        speed: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        rpm: {
            size: 2,
            parser: hex => parseInt(hex, 16)
        },

        odometer: {
            size: 4,
            parser: hex => parseInt(hex, 16)
        },

        fuelType: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        fuelLevel: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        oilTemp: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        checksum: {
            size: 2,
            parser: hex => hex
        }
    };

    static canPacketDef = {
        imei: {
            size: 8,
            parser: hex => BigInt("0x" + hex).toString()
        },

        packetSize: {
            size: 2,
            parser: hex => parseInt(hex, 16)
        },

        eType: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        seqNumber: {
            size: 1,
            parser: hex => parseInt(hex, 16)
        },

        mainPower: {
            size: 2,
            parser: hex => parseInt(hex, 16) / 100 
        },

        batteryPower: {
            size: 2,
            parser: hex => parseInt(hex, 16) / 10 
        },

        rssi: {
            size: 1,
            parser: hex => {
                let v = parseInt(hex, 16);
                return v > 127 ? v - 256 : v;
            }
        }
    };



    static eType = {
        1: "Heartbeat",
        2: "Stop",
        3: "Sleep",
        4: "Moving",
        5: "Pwrconn",
        6: "Pwrdisconn",
        7: "Periodboot",
        8: "Warmboot",
        9: "Coldboot",
        10: "Gpsacq"
    }

}

module.exports = AllPacketsDef;


