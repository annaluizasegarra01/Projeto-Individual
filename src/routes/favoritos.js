var express = require("express");
var router = express.Router();

var favoritosController = require("../controllers/favoritosControllers");

router.post("/favoritar", favoritosController.favoritar);
router.delete("/desfavoritar", favoritosController.desfavoritar);
router.get("/verificar/:idUsuario/:idReceita", favoritosController.verificarFavorito);
router.get("/listar/:idUsuario", favoritosController.listarFavoritosPorUsuario);
router.get("/receitas/:idUsuario", favoritosController.listarDetalhesFavoritos);
router.get('/atividade/:idUsuario', favoritosController.atividadeUsuario);

module.exports = router;



