const express = require("express");
const Router = require("../Router/router.js");
const server = express();
server.use(express.json());

server.use("../Router/Router.js", Router);
module.exports = server;