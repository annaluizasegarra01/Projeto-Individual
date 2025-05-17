var favoritosModel = require("../models/favoritosModel");

function favoritar(req, res) {
    var { idUsuario, idReceita } = req.body;

    favoritosModel.favoritar(idUsuario, idReceita)
        .then(() => res.status(200).send("Favorito adicionado"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function desfavoritar(req, res) {
    var { idUsuario, idReceita } = req.body;

    favoritosModel.desfavoritar(idUsuario, idReceita)
        .then(() => res.status(200).send("Favorito removido"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function verificarFavorito(req, res) {
    var { idUsuario, idReceita } = req.params;

    favoritosModel.verificarFavorito(idUsuario, idReceita)
        .then(resultado => {
            res.json({ favoritado: resultado.length > 0 });
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarFavoritosPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    favoritosModel.listarFavoritosPorUsuario(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarDetalhesFavoritos(req, res) {
    var idUsuario = req.params.idUsuario;

    favoritosModel.listarDetalhesFavoritos(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    favoritar,
    desfavoritar,
    verificarFavorito,
    listarFavoritosPorUsuario,
    listarDetalhesFavoritos
};

