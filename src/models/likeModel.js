const database = require("../database/config");

function darLike(idUser, idLang) {
  const query = `INSERT INTO metrica_like (user_id, langs_id) VALUES (${idUser}, ${idLang}) `;
  return database.executar(query);
}

module.exports = {
  darLike,
};
