const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

router.post("/insert", ticketController.insertTicket);
router.get("/listar/:idLang", ticketController.listarTickets);

module.exports = router;
