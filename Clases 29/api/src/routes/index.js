// const axios = require('axios');
const { Router } = require("express");
// const {Recipe,Diet} = require('../db')
const carpeta1 = require("./controllers/carpeta1");

const router = Router();

// Configurar los routers

router.use("/carpeta", carpeta1);

module.exports = router;
