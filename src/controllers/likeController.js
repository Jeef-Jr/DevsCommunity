const likeModel = require("../models/likeModel");

function darLike(req, res) {
  const idUser = req.body.idUser;
  const idLang = req.body.idLang;

  likeModel
    .darLike(idUser, idLang)
    .then(() => {
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

module.exports = {
  darLike,
};
