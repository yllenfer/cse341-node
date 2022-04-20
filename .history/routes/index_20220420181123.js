const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.send('Ellen Fernandez, I am here again')
})

module.exports = routes