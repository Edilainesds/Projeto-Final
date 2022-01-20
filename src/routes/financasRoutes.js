const express = require("express"); 
const router = express.Router(); 

const controller = require("../controller/financasController");
const Login = require("../controller/loginController");

router.get("/all", controller.getAll);
router.post("/criar" , controller.criarCadastro);
router.put("/atualizar/:id" , controller.atualizarCadastro);
router.delete("/deletar" ,controller.deletarCadastro);
router.get("all/:id" , controller.buscarId);
router.post("/login",controller.login)
router.post("/cadastro" ,controller.criandoCadastro)

module.exports = router