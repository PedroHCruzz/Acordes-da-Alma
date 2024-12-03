var database = require("../database/config")

function avaliar(idComentario, fkusuario, fkemocao, conteudo) {
    // na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO analises (idComentario, fkusuario, fkemocao, conteudo) VALUES (${idComentario}, '${fkusuario}', ${fkemocao}, ${conteudo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxar(fkusuario){
    var instrucaoSql = `
    SELECT idComentario, fkusuario, conteudo from comentarios where fkusuario = ${fkusuario};
`;
    return database.executar(instrucaoSql);
}

function grafico(fkemocao){
    var instrucaoSql = ` SELECT descricao from emocao`;
    return database.executar(instrucaoSql);
}

module.exports = {
    avaliar,
    puxar,
    grafico
};