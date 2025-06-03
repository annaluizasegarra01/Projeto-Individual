const express = require("express");
const router = express.Router();
const graficosController = require("../controllers/graficosControllers");

router.get('/atividade/:idUsuario', graficosController.atividadeUsuario);
router.get("/grafico-pizza/:idUsuario", graficosController.obterGraficoPizza);
router.get("/grafico-top-receitas", graficosController.obterTopReceitas);
router.get("/favoritas-usuario/:idUsuario", graficosController.favoritasUsuario);
router.get("/tipo-preferido/:idUsuario", graficosController.tipoPreferido);
router.get("/ultimos-resultados", graficosController.resumoUltimosResultados);


module.exports = router;