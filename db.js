const mongoose = require('mongoose');
require('dotenv').config
// Define the mongoDB URL
// const mongo_URL = process.env.MONGO_URL_LOCAL 
const mongoURL = process.env.DB_URL

// set up mongoose connection

 const db = mongoose.connect('mongodb://127.0.0.1:27017/hoteldata')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


//for geting default connection
//Mongoose maintains a default connection object representing the MongoDb connection

// const db = mongoose.connection;

// // Define event listners for database connection
// db.on('connected',()=>{
//     console.log('connected to mongoDB server')
// })

// db.on('error',(err)=>{
//     console.log(`didn't connect ${err}`)
// })

// db.on('disconnected',()=>{
//     console.log('Disconnected from mongoDB')
// })

module.exports = db;

