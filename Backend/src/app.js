const express = require("express")
const notemodel = require("./config/model/note.model")
const app = express()
const cors = require("cors")



app.use(cors())
app.use(express.json())



app.post('/api/notes', async (req, res) => {
    const { title, description, discrption } = req.body


    const notes = await notemodel.create({
        title,
        description: description || discrption
    })

    res.status(200).json({
        message: "note create successfully",
        notes
    })
})

app.get("/api/notes", async (req, res) => {

    const notes = await notemodel.find()

    res.status(200).json({
        message: "its get",
        notes
    })
})

app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id

    await notemodel.findByIdAndDelete(id)

    res.status(200).json({
        message: "done",

    })
})

app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id

    const { description } = req.body
    await notemodel.findByIdAndUpdate(id, { description })



    res.status(200).json({
        message: "its update"
    })
})

module.exports = app




