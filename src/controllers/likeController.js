const { json } = require("express/lib/response");
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

function listarLike(req, res) {
  const idUser = req.body.idUser;
  const idLang = req.body.idLang;

  likeModel
    .listarLike(idUser, idLang)
    .then((response) => {
      const tamanho = response.length;

      if (tamanho > 0) {
        res.json({
          mensagem: "success",
        });
      } else {
        res.json({
          mensagem: "inot_like",
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

function buscarLikesLang(req, res) {
  const idLang = req.params.idLang;

  likeModel
    .listarLikesTotaisLang(idLang)
    .then((response) => {
      const tamanho = response.length;

      if (tamanho > 0) {
        res.json({
          response,
        });
      } else {
        res.json({
          mensagem: "error",
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

function likesLang(req, res) {
  const idLang = req.params.idLang;

  likeModel.likesLang(idLang).then((response) => {
    const tamanho = response.length;


    if(tamanho > 0){
      res.json({
        response
      })
    }else {
      res.status(400).json({
        mensagem: "like_found"
      })
    }
  }).catch((error) => {
    console.log(JSON.stringify({ error }));
    res.status(500).json({
      error,
    });
  });

}

module.exports = {
  darLike,
  listarLike,
  buscarLikesLang,
  likesLang
};
