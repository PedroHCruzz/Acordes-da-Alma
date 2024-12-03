const { query } = require("express");
var avaliarModel = require("../models/ComentarioModel");


function avaliar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idComentario= req.body.id;
    var conteudo = req.body.conteudo;
    var emocao = req.body.emocao;
    var fkusuario= req.body.idJogo

    // Faça as validações dos valores
    if (idComentario== undefined) {
        res.status(400).send("Seu idComentario está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("Sua conteudo está undefined!");
    } else if (emocao == undefined) {
        res.status(400).send("Seu emocao está undefined!");
    } else if (idComentario== undefined) {
        res.status(400).send("Seu fkusuario está undefined!");
    }
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliarModel.avaliar(idComentario, conteudo, emocao, fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a avaliação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function puxar(req, res){
    var idComentario = req.params.idJogo
    console.log(idComentario)
    avaliarModel.puxar(idComentario)
        .then(
            function (resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao puxar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function grafico(req, res){
    var idComentario = req.query.idComentario
    
    avaliarModel.grafico(idComentario)
        .then(
            function (resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao puxar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    Comentario,
    puxar,
    grafico
}