const express = require("express");
const router = express.Router();

const viewController = require("../controllers/viewController");

router.post("/insert", viewController.insertView);
router.get("/listar/lang/:idLang", viewController.listarViewsLang);

module.exports = router;
