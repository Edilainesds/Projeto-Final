
const express = require('express')
const cors = require('cors')
 
require('dotenv-safe').config() 
const db = require('./database/mongoConfig')
const routes = require("./routes/financasParaCriancasroutes")

const app = express()

app.use(cors())
app.use(express.json())

db.connect()   

app.use("/financas", routes)

module.exports = app