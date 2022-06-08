const database = require("../database/config");

function inserTicket(iduser, dificuldade, descricao, idLang) {
  const query = `
        INSERT INTO ticket (dificuldade, descricao, status, user_id, langs_id) 
        VALUES(${dificuldade}, '${descricao}', 1, ${iduser}, ${idLang});
    `;
  return database.executar(query);
}

function listarTickets(idLang) {
  const query = `
  SELECT * FROM ticket AS T 
  JOIN user AS U ON T.user_id = U.id 
  WHERE langs_id = ${idLang} ORDER BY dificuldade;`;
  return database.executar(query);
}

module.exports = {
  inserTicket,
  listarTickets,
};
