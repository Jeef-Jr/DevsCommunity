const viewModel = require("../models/viewModel");

function insertView(req, res) {
  const idLang = req.body.idLang;
  viewModel
    .inserirView(idLang)
    .then((response) => {
      const aff = response.affectedRows;

      if (aff > 0) {
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

function listarViewsLang(req, res) {
  const idLang = req.params.idLang;

  viewModel
    .listarViewsLang(idLang)
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

function listarAcessosLang(req, res) {
  const idLang = req.params.idLang;

  viewModel.listarAcessosLang(idLang).then((response) => {
    const tamanho = response.length;
    if(tamanho > 0){
      res.json({
        response
      })
    }
  }).catch((error) => {
    console.log(JSON.stringify({ error }));
    res.status(500).json({
      error,
    });
  });
}

function listarTodosViews(req, res){

  viewModel.listarTodosViews().then((response) => {
    const tamanho = response.length;

    if(tamanho > 0){
      res.json({
        response
      })
    }else {
      res.json({
        response: "error"
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
  insertView,
  listarViewsLang,
  listarTodosViews,
  listarAcessosLang 
};
