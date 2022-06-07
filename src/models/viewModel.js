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

function listarTodosViews(){
  const query = `
  SELECT DISTINCT(COUNT(MV.langs_id)) AS "qtd_acessos", L.nome
	FROM metrica_view AS MV JOIN langs AS L 
	ON MV.langs_id = L.id GROUP BY MV.langs_id
  `;
  return database.executar(query)
}




module.exports = {
  inserirView,
  listarViewsLang,
  listarTodosViews,
  listarAcessosLang
};
