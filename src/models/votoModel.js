var database = require("../database/config");

function atualizarVoto(idVotos) {
  var instrucaoSql = `
        UPDATE votos
        SET quantidade = quantidade + 1
        WHERE idVotos = ${idVotos}
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
  var instrucaoSql = `SELECT quantidade, opcao FROM votos`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  atualizarVoto,
  buscarVotos,
};
