const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/verifyNickname", usuarioController.verifyNickname);
router.post("/verify", usuarioController.verifyLogin);
router.post("/cadastrar", usuarioController.cadastrar);
router.post("/login", usuarioController.entrar);
router.get("/informations/:id", usuarioController.buscarInformationUser);

module.exports = router;
