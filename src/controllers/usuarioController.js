const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");
const salts = 10;

async function verifyLogin(req, res) {
  const login = await req.body.login;

  usuarioModel.verifyLogin(login).then((response) => {
    res.json({
      response,
    });
  });
}

async function verifyNickname(req, res) {
  const nickname = await req.body.nickname;
  usuarioModel.verifyNickname(nickname).then((response) => {
    res.json({
      response,
    });
  });
}

async function cadastrar(req, res) {
  const nickname = req.body.nickname;
  const login = req.body.login;
  const senha = req.body.senha;

  const salt = bcrypt.genSaltSync(salts);
  const hash = bcrypt.hashSync(senha, salt);

  usuarioModel
    .cadastrar(nickname, login, hash)
    .then((response) => {
      const tamanho = response.affectedRows;
      if (tamanho > 0) {
        res.json({
          mensagem: "success",
        });
      } else {
        res.status(404).json({
          mensagem: "error",
        });
      }
    })
    .catch((error) => {
      console.log(JSON.stringify({ error }));
      res.status(504).json({
        error,
      });
    });
}

function entrar(req, res) {
  const login = req.body.login;
  const senha = req.body.senha;

  usuarioModel.logar(login).then((response) => {
    const tamanho = response.length;
    if (tamanho > 0) {
      const senha_bd = response[0].senha;

      bcrypt.compare(senha, senha_bd, (err, data) => {
        if (err) throw err;
        if (data) {
          res.json({
            mensagem: "success",
            dados: response,
          });
        } else {
          res.status(401).json({
            mensagem: "credencial_invalid",
          });
        }
      });
    }
  });
}

function buscarInformationUser(req, res) {
  const idUser = req.params.id;
  usuarioModel
    .buscarInformationUser(idUser)
    .then((response) => {
      const tamanho = response.length;
      if (tamanho > 0) {
        res.json({
          response,
        });
      } else {
        res.status(404).json({
          mensagem: "user_incorret",
        });
      }
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      res.json({ error });
    });
}

module.exports = {
  entrar,
  verifyLogin,
  verifyNickname,
  buscarInformationUser,
  cadastrar,
};
