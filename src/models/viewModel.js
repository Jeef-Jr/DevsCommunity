const database = require("../database/config");

function inserirView(idLang) {
  const query = `INSERT INTO metrica_view (langs_id) VALUES (${idLang}) `;
  return database.executar(query);
}

function listarViewsLang(idLang) {
  const query = `SELECT COUNT(langs_id) AS 'qtd_views' FROM metrica_view WHERE langs_id =${idLang}`;
  return database.executar(query);
}

function listarAcessosLang(idLang){
  const query = `
  SELECT COUNT(langs_id) AS 'qtd_view' FROM metrica_view WHERE langs_id = ${idLang};
  `

  return database.executar(query)
}

// SELECT DISTINCT(COUNT(MV.langs_id)) AS "qtd_acessos", L.nome, DATE_FORMAT(access, "%d/%m/%Y") AS 'date' 
// FROM metrica_view AS MV JOIN langs AS L 
// ON MV.langs_id = L.id GROUP BY MV.langs_id, DATE ORDER BY DATE DESC


module.exports = {
  inserirView,
  listarViewsLang,
  listarAcessosLang
};
