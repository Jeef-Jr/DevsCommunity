const database = require("../database/config");

function inserirView(idLang) {
  const query = `INSERT INTO metrica_view (langs_id) VALUES (${idLang}) `;
  return database.executar(query);
}

function listarViewsLang(idLang) {
  const query = `SELECT COUNT(langs_id) AS 'qtd_views' FROM metrica_view WHERE langs_id =${idLang}`;
  return database.executar(query);
}

// SELECT YEAR(access) AS ano,
//     MONTH(access) AS mes,
//     DAYOFMONTH(access) AS dia,
//     count(*) AS acessos FROM metrica_view WHERE langs_id = 1 GROUP BY ano, mes, dia
// ORDER BY acessos DESC;

module.exports = {
  inserirView,
  listarViewsLang,
};
