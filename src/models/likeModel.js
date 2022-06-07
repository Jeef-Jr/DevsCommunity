const database = require("../database/config");

function darLike(idUser, idLang) {
  const query = `INSERT INTO metrica_like (user_id, langs_id) VALUES (${idUser}, ${idLang}) `;
  return database.executar(query);
}

function listarLike(idUser, idLang) {
  const query = `SELECT langs_id FROM metrica_like WHERE user_id = ${idUser} AND langs_id = ${idLang}`;
  return database.executar(query);
}

function listarLikesTotaisLang(idLang) {
  const query = `SELECT COUNT(langs_id) AS 'qtd_like' FROM metrica_like WHERE langs_id = ${idLang}`;
  return database.executar(query);
}

module.exports = {
  darLike,
  listarLike,
  listarLikesTotaisLang,
};
