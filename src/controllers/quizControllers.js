var quizModel = require("../models/quizModel");

function verResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultadoQuiz = req.body.quizServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (resultadoQuiz == undefined) {
        res.status(400).send("Seu resultado está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.verResultado(resultadoQuiz, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao guardar o resultado do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    verResultado
}