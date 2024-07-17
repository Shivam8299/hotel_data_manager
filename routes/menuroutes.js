const express = require('express')
const router = express.Router()
const menu = require('./../models/menu')

// for inserting menu

router.post("/", async(req, res)=>{
    try{
        const data = req.body;
    const newMenu = new menu(data)
    const savedMenu = await newMenu.save();
    res.status(200).json(savedMenu);
    console.log("data saved successfully")
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }

})

// reading menu data 

router.get("/", async (req, res)=>{
   try {
    const result = await menu.find()
    console.log(result)
    res.status(200).send(result)
   }
   catch(error){
    console.log(error)
    res.status(500).json({error:"internal server error"})
}
})

// reading menu by taste 

router.get('/:taste',async(req,res)=>{
    let taste = req.params.taste;
    try{
        if(taste === 'sweet' || taste === 'sour' || taste === 'spicy'){
            const response = await menu.find({taste:taste})
            console.log('data fatched')
            res.status(200).json(response)
        }
        else{
            res.status(404).json("invailed taste type")
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }

})
router.put("/:id", async (req,res)=>{
   try {
    let itemId = req.params.id;
    let memuItem = req.body;
    const response = await menu.findByIdAndUpdate(itemId,memuItem,{
        new:true,
        runValidators: true
    })
    if(!response){
        res.status(404).json({error:"item not found"})
    }
    res.status(200).json(response)
    console.log("data updated");
   }
   catch(error){
    console.log(error)
    res.status(500).json({error:'internal server error'})
}
})

router.delete("/:id", async(req, res)=>{
    try{
        let itemId = req.params.id;
        const response = await menu.findByIdAndDelete(itemId);
        if(!response){
            res.status(404).json({error:"item not found in the menu"})
        }
        console.log("menuItem data successfully delected")
        res.status(200).json({message:"data succesfully Deleted"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({error : "Internal server error"})
    }

})

module.exports = router;