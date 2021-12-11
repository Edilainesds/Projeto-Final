
const express = require('express')
const cors = require('cors')
 
require('dotenv-safe').config() 
const db = require('./database/mongoConfig')
const routes = require("./routes/financasParaCriancasroutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/financas", routes)
db.connect()   

module.exports = app