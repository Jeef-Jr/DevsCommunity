const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likeController");

router.post("/active", likeController.darLike);
router.post("/listar", likeController.listarLike);
router.get("/lang/:idLang", likeController.buscarLikesLang);

module.exports = router;
