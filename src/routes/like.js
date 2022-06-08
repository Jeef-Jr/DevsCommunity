const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likeController");

router.post("/active", likeController.darLike);
router.post("/listar", likeController.listarLike);
router.get("/lang/:idLang", likeController.buscarLikesLang);
router.get("/likes/lang/:idLang", likeController.likesLang);
router.get("/total", likeController.totalLikes);

module.exports = router;
