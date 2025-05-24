var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizControllers");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/resultados", function (req, res) {
    quizController.verResultado(req, res);
});

module.exports = router;