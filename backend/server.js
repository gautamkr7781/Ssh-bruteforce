const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ssh_dashboard");

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use("/api/logs", require("./routes/logs")(io));

server.listen(5000, () => console.log("Server running on port 5000"));