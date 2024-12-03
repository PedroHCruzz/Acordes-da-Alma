var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/ComentariosController");

router.post("/enviar", function (req, res) {
    avaliarController.avaliar(req, res);
})

router.get("/puxar/:idComentario", function (req, res){
    avaliarController.puxar(req, res)
})

router.get("/grafico", function (req, res){
    avaliarController.grafico(req, res)
})

module.exports = router;