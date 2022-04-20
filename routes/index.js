const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.send('Georges Janin')
})

module.exports = routes