const express = require("express");
const socketio = require("socket.io");
const app = express();


const port = 3000;

var state = {};

app.use(express.static(path.join(__dirname, "public")));
const server = http.createServer(app);

const io = socketio(server);
io.on("connection", (socket) => {
//   console.log("New WS Connection...");
//   socket.on("disconnect", () => {
//     io.emit("message", "user has left the chat");
//   });

//   socket.on("screen", (msg) => {
//     console.log(msg);
//     io.emit("screen", msg);
//   });

//   socket.on("comando", (msg) => {
//     console.log(msg);

//     if (msg === "P") {
//       spotify
//         .playerManager("previous")
//         .then((r) => {
//           spotify
//             .playerManager("pause")
//             .then((r) => console.log("OK"))
//             .catch((x) => console.log(x));
//         })
//         .catch((x) => console.log(x));
//     }

//     if (msg === "Y") {
//       spotify
//         .playerManager("play")
//         .then((r) => console.log("OK"))
//         .catch((x) => console.log(x));
//     }

//     if (msg === "R") {
//       if (state.progress_ms - 15 * 1000 > 15000)
//         spotify
//           .playerManager("seek?position_ms=" + (state.progress_ms - 15000))
//           .then(console.log)
//           .catch(console.log);
//     }

//     if (msg === "S") {
//       spotify
//         .playerManager("pause")
//         .then((r) => console.log("OK"))
//         .catch((x) => console.log(x));
//     }

//     if (msg === "F") {
//       if (state.progress_ms + 15 * 1000 < state.duration_ms) {
//         spotify
//           .playerManager("seek?position_ms=" + (state.progress_ms + 15000))
//           .then(console.log)
//           .catch(console.log("Error"));
//       }
//     }

//     if (msg === "N") {
//       spotify
//         .playerManager("volume?volume_percent=0")
//         .then((r) => {
//           spotify
//             .playerManager("next")
//             .then((r) => {
//               spotify
//                 .playerManager("pause")
//                 .then((r) => {
//                   spotify.playerManager("volume?volume_percent=100");
//                 })
//                 .catch((x) => console.log(x));
//             })
//             .catch((x) => console.log(x));
//         })
//         .catch((x) => console.log(x));
//     }

//     io.emit("comando", msg);
//   });
});


server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}/`);
});