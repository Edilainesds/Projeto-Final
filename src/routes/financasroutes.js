const express = require("express"); // chamo pois eu preciso usar o router
const router = express.Router(); // Para utilizar as rotas feitas no controller

const controller = require("../controller/financasController"); //pegar

router.get("/all", controller.getAll);
router.post("/criar" , controller.criarCadastro);
router.put("/atualizar/:id" , controller.atualizarCadastro);
module.exports = router