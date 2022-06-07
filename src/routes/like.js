const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likeController");

router.post("/active", likeController.darLike);

module.exports = router;
