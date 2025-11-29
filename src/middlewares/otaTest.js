module.exports = function testScript(mqttClient) {
  const TOPIC = "otaupdate";
  const imei = "353081090133664";
  const fId = 2;

  let packetNo = 1;
  const MAX_PACKETS = 69;
  

  let timeoutId = null;

  const REQUEST_DELAY = 2000;   // 2 sec before sending request
  const RESPONSE_DELAY = 3000;  // 3 sec delay after response
  const SERVER_TIMEOUT = 10000; // 10 sec max wait for server

  mqttClient.subscribe(imei, { qos: 2 }, (err) => {
    if (err) {
      console.error("Failed to subscribe to IMEI topic:", err);
      return;
    }
  });

  console.log("  Waiting for MQTT connection...");

  setTimeout(() => {
    console.log("✔ Connected. Starting OTA test...\n");
    function sendNextPacket() {
      if (packetNo > MAX_PACKETS) {
        console.log("\n OTA Test Completed. Closing client...");
        mqttClient.end();
        return;
      }

      setTimeout(() => {
        const req = {
          imei,
          fId,
          packet_no: packetNo
        };

        console.log(`➡ Sending request → packet_no=${packetNo}`);
        mqttClient.publish(TOPIC, JSON.stringify(req), { qos: 2 });

        // SERVER MUST RESPOND WITHIN 10 SECONDS
        timeoutId = setTimeout(() => {
          console.error(
            `ERROR: Server took too long! No response for packet_no=${packetNo}`
          );
          console.log("Aborting OTA process...");
          mqttClient.end(); // stop everything
        }, SERVER_TIMEOUT);

      }, REQUEST_DELAY);
    }

  
    mqttClient.on("message", (topic, rawBuffer) => {
      if (topic !== imei) return;

      clearTimeout(timeoutId); // server responded in time

      const currentPacket = packetNo;

      console.log(`⬅ Received response for packet_no=${currentPacket}, size=${rawBuffer.length} bytes`);

      packetNo++; // move to next packet

      // Wait 3 sec before sending next request
      setTimeout(() => {
        sendNextPacket();
      }, RESPONSE_DELAY);
    });

    mqttClient.on("error", (err) => {
      console.error("MQTT Error:", err);
    });

    // Start OTA
    sendNextPacket();

  }, 2000);
};
