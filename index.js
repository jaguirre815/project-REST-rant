const { append } = require("express/lib/response")

require('dotenv').config()
const express = ('express')
const app= express()

app.use('/places', require('./controller/places'))


app.get ('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 page</h1>')
})

app.listen(process.env.PORT)