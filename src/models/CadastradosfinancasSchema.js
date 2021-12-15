const mongoose = require("mongoose"); // para conectar com o banco de dados

const usersSchema = new mongoose.Schema({
   id: mongoose.Schema.Types.ObjectId,
    nome: {
     
    type: String,
    required: true

   },
   email: {
    type: String,
    required: true,
    unique: true,

   },
   idade: {
       type: Number,
       required:true
   },



}, {timestamps:true}
)
const Users = mongoose.model("User" , usersSchema);
 module.exports = Users 