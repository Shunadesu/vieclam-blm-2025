const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Db Connect functional
dbConnect()
initRoutes(app)

app.use('/', (req, res) => {res.send('SERVER ON')})

app.listen(port, ()=>{
    console.log('Server running on the port: ', + port)
})