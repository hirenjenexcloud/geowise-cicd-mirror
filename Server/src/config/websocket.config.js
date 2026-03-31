// const io  = require("socket.io-client");

// let socket;

// module.exports.connectSocket = function() {
//   console.log("Connecting to remote server...");
//   socket = io("http://192.168.1.28:3001", {
//     transports: ["websocket"],
//     reconnection: true,
//     reconnectionAttempts: Infinity,
//     reconnectionDelay: 5000
//   });

//   socket.on("connect", () => {
//     console.log("Connected to remote server:", socket.hostname + ":" + socket.port);
//   });

//    const channel = "geowise";
//    const message = "Hi this is geowise server";
//    socket.emit(channel, message);
//    console.log(`Message sent on channel "${channel}":`, message);

//   socket.on("disconnect", () => {
//     console.log("Disconnected from remote server");
//   });

//   socket.on("connect_error", (err) => {
//     // console.log("Connection Error:", err.message);
//   });

 

// }


// module.exports.getSocket = function() {
//   if (!socket) {
//     throw new Error("Socket not initialized. Call connectSocket() first.");
//   }
//   return socket;
// }


const WebSocket = require("ws");

let ws;

module.exports.connectSocket = function () {

  // ws = new WebSocket("ws://192.168.1.23:8080");
  ws = new WebSocket("ws://76.243.12.207/ws/telemetry");
  
  ws.on("open", () => {
    console.log("Connected to telemetry server - ",ws.url);

    // const message = {
    //   server: "geowise",
    //   text: "Hi this is geowise server"
    // };

    // ws.send(JSON.stringify(message));

    // console.log("Data sent:", message);
  });

  ws.on("message", (data) => {
    console.log("Message received from server:", data.toString());
  });

  ws.on("close", () => {
    console.log("Connection closed");
  });

  ws.on("error", (error) => {
    console.log("WebSocket error:", error.message);
  });

};

module.exports.getSocket = function () {

  if (!ws) {
    throw new Error("WebSocket not initialized. Call connectSocket() first.");
  }
  return ws;
};




