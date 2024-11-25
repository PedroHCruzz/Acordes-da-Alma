var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.post("/votar/:nomeJogo", function (req, res) {
  votoController.votarPorNome(req, res); 
});

router.get("/ultimos", function (req, res) {
  votoController.obterVotosAtualizados(req, res);
});

module.exports = router;
