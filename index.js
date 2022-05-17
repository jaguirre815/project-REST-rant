const { append } = require("express/lib/response")

const express = ('express')
const pp= express()


append.get ('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)