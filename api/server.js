require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const guestRouter = require("./users/guest-router");
const potluckRouter = require("./potluck/potluck-router");
const organizerRouter = require("./users/organizer-router");
const itemRouter = require("./items/item-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/guest", guestRouter);
server.use("/api/organizer", organizerRouter);
server.use("/api/potluck", potluckRouter);
server.use("/api/item", itemRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "api is up!" });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong with the server",
  });
});

module.exports = server;
