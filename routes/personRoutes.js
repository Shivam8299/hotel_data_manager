const express = require('express');
const router = express.Router()
const person = require('./../models/personData')


router.post("/", async (req,res)=>{
    const data = req.body
    const newPerson = new person(data)
    const savedData = await newPerson.save();
    res.status(200).json(savedData);
    console.log(savedData);
})

// for reading data 

router.get("/", async(req, res)=>{
    try{
        const result = await person.find();
        console.log(result)
        res.send(result);
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }
})

router.get("/:worktype", async(req, res)=>{
    let worktype = req.params.worktype;
    try{
        if(worktype === "Software Engineer" || worktype === "Data Analyst" ||worktype ==="Project Manager" ){
            const response = await person.find({work:worktype})
            console.log('data fatched')
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"invailed taste type"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }
})
// for update person details

router.put("/:id",async(req, res)=>{
   try{
    let personId = req.params.id;
    const updateData = req.body
    const response =  await person.findByIdAndUpdate(personId,updateData,{
        // it's return updated Documents
        new:true,
        // rum mongoose validations
        runValidators:true

    })
    if(!response){
        return res.status(404).json({error : "person page not found"})
    }
    console.log("data updated")
    res.status(200).json(response)
   }
   catch(error){
    console.log(error)
    res.status(500).json({error:'internal server error'})
   }
})

// Delete person details 

router.delete("/:id", async (req,res)=>{
   try {
    // extract the person id from dbs
    let id = req.params.id;
    const response = await person.findByIdAndDelete(id)
    if(!response){
        return res.status(404).json({error : "person page not found"})
    }
    res.status(200).json({massage: "person data delected successfully"})
    console.log("data deleted")
   }
    catch(error){
    console.log(error)
    res.status(500).json({error:'internal server error'})
   }
    
})

module.exports = router;