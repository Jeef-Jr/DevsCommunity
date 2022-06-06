const database = require("../database/config");

function verifyLogin(login) {
  const query = `SELECT login FROM user WHERE login = '${login}'`;

  return database.executar(query);
}

function verifyNickname(nickname) {
  const query = `SELECT nickname FROM user WHERE nickname = '${nickname}'`;
  return database.executar(query);
}

function cadastrar(nickname, login, senha) {
  const query = `
    INSERT INTO user (nickname, login, senha) VALUES ('${nickname}','${login}','${senha}')
  `;
  return database.executar(query);
}

function logar(login) {
  const query = `SELECT id, login, senha FROM user WHERE login = '${login}'`;
  return database.executar(query);
}

function buscarInformationUser(iduser) {
  const query = `SELECT * FROM user WHERE id = '${iduser}'`;
  return database.executar(query);
}

module.exports = {
  cadastrar,
  verifyLogin,
  verifyNickname,
  logar,
  buscarInformationUser,
};
