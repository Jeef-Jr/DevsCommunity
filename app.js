process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./src/routes/index");
const usuariosRouter = require("./src/routes/usuarios");
const likeRouter = require("./src/routes/like");
const viewRouter = require("./src/routes/view");

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usuariosRouter);
app.use("/like", likeRouter);
app.use("/view", viewRouter);

io.on("connection", (socket) => {
  console.log(`socket connection ${socket.id}`);
  socket.on("chat message", (msg, user) => {
    io.emit("chat message", msg, user);
  });
});

server.listen(3333, () => {
  console.log("listening on *:3333");
});
