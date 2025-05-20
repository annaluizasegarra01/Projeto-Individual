const graficoModel = require("../models/graficosModel");

function obterGraficoPizza(req, res) {
    const idUsuario = req.params.idUsuario;

    graficoModel.contarFavoritosPorTipo(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao obter dados do gráfico:", erro.sqlMessage);
            res.status(500).send("Erro no servidor.");
        });
}

function obterTopReceitas(req, res) {
    graficoModel.topReceitasFavoritas()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar top receitas:", erro);
            res.status(500).send("Erro ao buscar dados do gráfico.");
        });
}


module.exports = {
    obterGraficoPizza,
    obterTopReceitas
};