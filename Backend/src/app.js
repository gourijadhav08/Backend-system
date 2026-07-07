const express = require("express")
const notemodel = require("./config/model/note.model")
const app = express()


app.use(express.json())


app.post('/api/notes',async(req,res)=>{
     const{ title,description}=req.body



  const note = await notemodel.create({
         title,description

         
     })

     res.status(200).json({
        message:"note create successfully",
         note
     })
})

app.get("/api/notes",async(req,res)=>{


    
    const notes = await notemodel.find()

    res.status(200).json({
        message:"its get",
        notes
    })
})

module.exports = app
