const router = require('express').Router()

let places = [{
    name: 'Mexican Food',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Mexican Cuisine',
    pic: '/images/mexican-restaurant.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafecafe.jpeg'
  }]

  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

  router.get('/', (req, res) => {
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router
