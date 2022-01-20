const res = require("express/lib/response");
const Users = require("../models/financasCadastroSchema");
const Login = require("../models/loginSchema");
const hasSenha = require("../helpers/auth")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


const getAll = async(req,res)=>{


  const authHeader = req.get("authorization");

  if (!authHeader) {
    return res.status(401).json({
      message: "It did not receive a token jwt",
      code: "NOT_AUTHORIZED_WITHOUT_TOKEN",
    });
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  try {
    const users = await Users.find();
    res.status(200).json({
      message: " Usuário encontrado com sucesso",
      users
    
    }) 
  } catch (error){
      res.status(500).json({
          message : erros.message
      }

      )
  }
}


  const criarCadastro = async (req,res) =>{
    try{

      const criarUsers = await Users.create(req.body)
       res.status(201).json({
         message: " Cadastro realizado com sucesso" ,
           criarUsers
       })
    }catch (error){
      res.status(500).json({message:error.message});
    }


}  


  const atualizarCadastro = async (req,res) =>{
      try{
           
        const atualizarInformacoes = await Users.findById(req.params.id);

       if(atualizarInformacoes){
         atualizarInformacoes.nome = req.body.nome || atualizarInformacoes.nome
         atualizarInformacoes.email = req.body.email || atualizarInformacoes.email
         atualizarInformacoes.idade = req.body.idade || atualizarInformacoes.idade
         atualizarInformacoes.MudancaHorarioAula = req.body.MudancaHorarioAula || atualizarInformacoes.MudancaHorarioAula
         atualizarInformacoes.mudarEnderecoDeAula = req.body.mudarEnderecoDeAula || atualizarInformacoes.mudarEnderecoDeAula
         
         const salvarInformacoes = await atualizarInformacoes.save();
          res.status(200).json(
            {
              message: "dados do usuario , atualizados com sucesso.",

              salvarInformacoes
            }
          )
          }
            res.status(400).json({message : "usuario não localizado"})

       } catch (error){
         res.status(500).json({message: error.message})

       }

      }
      

      const deletarCadastro = async (req, res) => {
        try {
            const financas = await Users.findById(req.params);
            if(!financas) {
                res.status(404).json({message: "usuario não encontrado."})
            }
            await financas.delete();
            res.status(204).json({message: "Cadastro removido com sucesso."})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    

    const buscarId = async (req, res) => {
      try {
          const { id } = req.params;
          const buscarUsers = await Users.findById(id);
  
          if(!buscarUsers) {
              res.status(404).json({message: "Usuario não encontrado."})
          }
          res.status(200).json({
              message: "Usuario encontrado:",
              buscarFinancers
          })
      } catch (error) {
          res.status(500).json({message: error.message});
      }
  }


  const login = async (req, res) => {
   
    try {
      const body = req.body
      const usuario = await Login.find({ email: body.email });
      const conferirSenha = usuario[0].senha;
      const senhaRecebida = req.body.senha;
      //const checksenha = await bcrypt.compare(senha, user.senha)
      //const checarASenha = await bcrypt.compare(senha, usuario[0].senha)
      console.log(body)
      if (senhaRecebida == conferirSenha) {
        console.log("Passei aqui")
        return res.status(200).send({ message: "Acesso liberado" });
      } 
        return res.status(422).send({ message: "Senha incorreta!" });
        
       //const solicitandoPontoenv = process.env.SECRET
       //const criarConstDeToken = jwt.sign({ id: usuario._id},solicitandoPontoenv)
       //res.status(200).json({message: "Acesso ao token" ,criarConstDeToken})
       
    } catch (error) {
      if (error.message === "Cannot read property 'senha' of undefined") {
        return res.status(404).json({
          message: "email não encontrado",
        });
      }
    }
  };
       
    


     const  criandoCadastro = async (req,res) =>{
       try {
        const senhaCrypt = hashsenha(req.body.senha);
        
         const novoUsuario = new Login({
           nome: req.body.nome,
           email:req.body.email,
           senha:senhaCrypt
           
           

         })
         const salvarUsuario = await novoUsuario.save();
         return res.status(201).json({
          message: "Usuario Registrado com Sucesso!",
          salvarUsuario,


        });
       } catch (error) {
        res.status(500).json({message: error.message});
       }
     }

     const hashsenha = (senha) => {
      return bcrypt.hashSync(senha, parseInt(process.env.BCRIPT_SALTS));
    };


  module.exports = {
      getAll,
      criarCadastro,
      atualizarCadastro,
      deletarCadastro,
      buscarId,
      login,
      criandoCadastro
   
  }



