require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const placesRoutes = require('./controllers/places.js')


//middleware
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//routes

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', placesRoutes)

app.get('*', (req, res) => {
    res.render('error404')
})


const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})
