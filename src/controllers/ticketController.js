const ticketModel = require("../models/ticketModel");

function insertTicket(req, res) {
  const idUser = req.body.idUser;
  const dificuldade = req.body.dificuldade;
  const descricao = req.body.descricao;
  const idLang = req.body.idLang;

  ticketModel
    .inserTicket(idUser, dificuldade, descricao, idLang)
    .then((response) => {
      res.json({
        mensagem: "success",
      });
    })
    .catch((error) => {
      console.log(JSON.stringify({ error }));
      res.status(500).json({
        error,
      });
    });
}

function listarTickets(req, res) {
  const idLang = req.params.idLang;

  ticketModel
    .listarTickets(idLang)
    .then((response) => {
      const tamanho = response.length;

      if (tamanho > 0) {
        res.json({
          response,
        });
      }
    })
    .catch((error) => {
      console.log(JSON.stringify({ error }));
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  insertTicket,
  listarTickets,
};
