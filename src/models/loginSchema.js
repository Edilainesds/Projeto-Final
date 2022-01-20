const mongoose = require("mongoose"); 

const loginSchema = new mongoose.Schema({
   id: mongoose.Schema.Types.ObjectId,
    nome: {
    type: String,
    required: true

   },
   email: {
    type: String,
    required: true,
    unique: true,
    ref: "financas",

   },
   senha: {
       type: String,
       required:true
   }


}, {timestamps:true}
)
const Login = mongoose.model("Login" , loginSchema);
 module.exports = Login