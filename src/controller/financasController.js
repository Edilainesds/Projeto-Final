const Users = require("../models/financasCadastroSchema");

const getAll = async(req,res)=>{

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
         
         const salvarInformacoes = await atualizarInformacoes.save();
          res.status(200).json(
            {
              message: "dados dos usuários , atualizados com sucesso.",

              salvarInformacoes
            }
          )
          }
            res.status(400).json({message : "me desculpe, usuário nao encontrado"})

       } catch (error){
         res.status(500).json({message: error.message})

       }

      }
      

      const deletarCadastro = async (req, res) => {
        try {
            const financas = await Users.findById(req.params);
            if(!financas) {
                res.status(404).json({message: "usuário não encontrado."})
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
              res.status(404).json({message: "Usuário não encontrado."})
          }
          res.status(200).json({
              message: "Usuário encontrado:",
              buscarDocerias
          })
      } catch (error) {
          res.status(500).json({message: error.message});
      }
  }



  module.exports = {
      getAll,
      criarCadastro,
      atualizarCadastro,
      deletarCadastro,
      buscarId
   
  }


  

