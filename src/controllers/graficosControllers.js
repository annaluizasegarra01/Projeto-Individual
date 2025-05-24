const graficosModel = require("../models/graficosModel");

function obterGraficoPizza(req, res) {
    const idUsuario = req.params.idUsuario;

    graficosModel.contarFavoritosPorTipo(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao obter dados do gráfico:", erro.sqlMessage);
            res.status(500).send("Erro no servidor.");
        });
}

function obterTopReceitas(req, res) {
    graficosModel.topReceitasFavoritas()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar top receitas:", erro);
            res.status(500).send("Erro ao buscar dados do gráfico.");
        });
}

function favoritasUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    graficosModel.favoritasUsuario(idUsuario).then(resultado => {
        if (resultado.length > 0) {
            res.json({ total: resultado[0].total });
        } else {
            res.json({ total: 0 });
        }
    }).catch(erro => {
        console.error(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function tipoPreferido(req, res) {
    var idUsuario = req.params.idUsuario;

    graficosModel.tipoPreferido(idUsuario).then(resultado => {
        if (resultado.length > 0) {
            res.json({ tipo: resultado[0].tipo });
        } else {
            res.json({ tipo: null });
        }
    }).catch(erro => {
        console.error(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function resumoUltimosResultados(req, res) {
    graficosModel.obterResumoUltimosResultados()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro ao buscar resumo:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    obterGraficoPizza,
    obterTopReceitas,
    favoritasUsuario,
    tipoPreferido,
    resumoUltimosResultados
};