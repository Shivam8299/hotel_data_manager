const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   age:{
    type: Number,
    required: true
   },
   mobile_no:{
    type:Number,
    required:true
   },
   work:{
      type: String
   },
   email: {
    type : String,
    unique: true
   },
   adress:{
    type:String
   },
   salary:{
    type: Number
   }
})


// Create the Person model
const person = mongoose.model('person', personSchema)
module.exports = person;