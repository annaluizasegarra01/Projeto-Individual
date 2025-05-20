const express = require("express");
const router = express.Router();
const graficosController = require("../controllers/graficosControllers");

router.get("/grafico-pizza/:idUsuario", graficosController.obterGraficoPizza);
router.get("/grafico-top-receitas", graficosController.obterTopReceitas);

module.exports = router;