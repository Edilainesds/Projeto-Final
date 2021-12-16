require('dotenv-safe').config() 
const express = require('express') //faz a ligacao http,crud.
const cors = require('cors') // não dar conflito de Api
 

const db = require('./database/mongoConfig') // chama a logica da programacao
const routes = require("./routes/financasRoutes")

const app = express()//ele que chama o express
db.connect()   

app.use(cors())
app.use(express.json())



app.use("/financas", routes) // rota raiz sempre que utilizar o postman colocar primeiro financas 

module.exports = app