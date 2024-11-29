var votoModel = require("../models/votoModel");

function votarPorId(req, res) {
  var idVotos = req.params.idVotos;
  console.log("voto recebido:", idVotos);

  votoModel.atualizarVoto(idVotos)                            
    .then(function (resultado) {                               
      res.status(200).send("Voto contabilizado com sucesso!"); 
    })
    .catch(function (erro) {                                               
      console.log(erro);                                                  
      console.log("Houve um erro ao atualizar os votos.", erro.sqlMessage); 
      res.status(500).json(erro.sqlMessage);                               
    });              
}

function obterVotosAtualizados(req, res) {
  console.log(`Buscando os votos...`);

  votoModel.buscarVotos()                                     
    .then(function (resultado) {                            
      if (resultado.length > 0) {                            
        console.log(resultado);                            
        res.status(200).json(resultado);                 
      } else {                                              
        res.status(204).send("Nenhum resultado encontrado!"); 
      }
    })
    .catch(function (erro) {                                             
      console.log(erro);                                                 
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage); 
      res.status(500).json(erro.sqlMessage);                             
    });
}

module.exports = {
  votarPorId,
  obterVotosAtualizados,
};
