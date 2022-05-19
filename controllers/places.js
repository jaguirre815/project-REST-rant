const router = require('express').Router()

let places = [{
    name: 'Mexican Food',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/mexican-restaurant.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafecafe.jpeg'
  }]

  router.get('/', (req, res) => {
      
    res.render('places/index', {places})
})

module.exports = router
