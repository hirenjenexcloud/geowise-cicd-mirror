
// const WebSocket = require("ws");

// let ws;

// module.exports.connectSocket = function () {

//   // ws = new WebSocket("ws://192.168.1.23:8080");
//   ws = new WebSocket("ws://76.243.12.207/ws/telemetry");
  
//   ws.on("open", () => {
//     console.log("Connected to telemetry server - ",ws.url);

//     // const message = {
//     //   server: "geowise",
//     //   text: "Hi this is geowise server"
//     // };

//     // ws.send(JSON.stringify(message));

//     // console.log("Data sent:", message);
//   });

//   ws.on("message", (data) => {
//     console.log("Message received from server:", data.toString());
//   });

//   ws.on("close", () => {
//     console.log("Connection closed");
//   });

//   ws.on("error", (error) => {
//     console.log("WebSocket error:", error.message);
//   });

// };

// module.exports.getSocket = function () {

//   if (!ws) {
//     throw new Error("WebSocket not initialized. Call connectSocket() first.");
//   }
//   return ws;
// };






const WebSocket = require("ws");

const BASE_DELAY_MS = 1000;   // 1s base
const MAX_DELAY_MS = 30000;   // max 30s cap

let ws = null;
let reconnectAttempts = 0;
let reconnectTimer = null;

function connectSocket() {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }

  const url = "ws://76.243.12.207/ws/telemetry";
  console.log(`[WS] Connecting to ${url} (attempt ${reconnectAttempts + 1})`);

  ws = new WebSocket(url);

  ws.on("open", () => {
    console.log("[WS] Connected to telemetry server -", url);
    reconnectAttempts = 0;  
  });

  ws.on("message", (data) => {
    console.log("[WS] Message received from server:", data.toString());
  });

  ws.on("close", (code, reason) => {
    console.warn(`[WS] Connection closed. Code: ${code}, Reason: ${reason || "N/A"}`);
    ws = null;
    scheduleReconnect();  
  });

  ws.on("error", (error) => {
    console.error("[WS] WebSocket error:", error.message);
  });
}

function scheduleReconnect() {
  reconnectAttempts++;

  
  const delay = Math.min(BASE_DELAY_MS * Math.pow(2, reconnectAttempts - 1), MAX_DELAY_MS);
  console.log(`[WS] Reconnecting in ${delay / 1000}s... (attempt ${reconnectAttempts})`);

  reconnectTimer = setTimeout(() => {
    connectSocket();
  }, delay);
}

function getSocket() {
  return ws;  
}

function disconnectSocket() {
  // use only for manual disconnect (server shutdown etc.)
  if (reconnectTimer) clearTimeout(reconnectTimer);
  if (ws) ws.close();
  ws = null;
  reconnectAttempts = 0;
}

module.exports = { connectSocket, getSocket, disconnectSocket };