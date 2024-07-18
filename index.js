const express = require('express')
const app = express();
const db = require('./db')
const person = require('./models/personData')
const menuData = require('./models/menu')
const bodyParser = require('body-parser')
require('dotenv').config();

app.use(bodyParser.json())
const PORT = process.env.PORT ||3000

app.get("/", (req, res)=>{
    res.send("Hello Sir,Welcome!")
})

// import the person router file
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

// import the menu route file 

const menuRoute = require('./routes/menuroutes')
app.use('/menu',menuRoute)

app.listen(PORT,()=>{
    console.log("server is listing on port 3000")
})