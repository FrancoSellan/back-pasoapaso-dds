const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Backend inicial")
})

const port = 3000

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
})