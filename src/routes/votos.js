var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.put("/votar/:idVotos", function (req, res) {
  votoController.votarPorId(req, res); 
});

router.get("/ultimos", function (req, res) {
  votoController.obterVotosAtualizados(req, res);
});

module.exports = router;
