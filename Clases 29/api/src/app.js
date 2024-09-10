const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

require("dotenv").config();

const { CLIENT_URL, CLIENT_LOCAL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
  process.env;

require("./db");

const server = express();

server.use(bodyParser.json());

server.set("trust proxy", 1);
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cookieParser());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

server.use("/api1", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
