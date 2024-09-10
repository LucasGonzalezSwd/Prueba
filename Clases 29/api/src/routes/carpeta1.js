const { Router } = require("express");
const getAll = require("./controllers/carpeta2");

const router = Router();

router.get("/", getAll);

module.exports = carpeta1;
