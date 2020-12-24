const express = require("express");
const cors = require("cors");
const Router = require("../Router/router.js");
const server = express();
server.use(express.json());
server.use(cors());
server.use("/api/posts", Router);
module.exports = server;