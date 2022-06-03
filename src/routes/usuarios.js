const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/verify", usuarioController.verifyLogin);

module.exports = router;
