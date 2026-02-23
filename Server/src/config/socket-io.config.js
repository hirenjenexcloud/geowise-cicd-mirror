const io  = require("socket.io-client");

let socket;

module.exports.connectSocket = function() {
  console.log("Connecting to remote server...");
  socket = io("http://192.168.1.28:3001", {
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 5000
  });

  socket.on("connect", () => {
    console.log("Connected to remote server:", socket.hostname + ":" + socket.port);
  });

   const channel = "geowise";
   const message = "Hi this is geowise server";
   socket.emit(channel, message);
   console.log(`Message sent on channel "${channel}":`, message);

  socket.on("disconnect", () => {
    console.log("Disconnected from remote server");
  });

  socket.on("connect_error", (err) => {
    console.log("Connection Error:", err.message);
  });

 

}


module.exports.getSocket = function() {
  if (!socket) {
    throw new Error("Socket not initialized. Call connectSocket() first.");
  }
  return socket;
}





