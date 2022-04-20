const routes = require('express')


routes.get('/', (req, res) => {
  res.send('Ellen Fernandez, I am here again')
})

module.exports = routes