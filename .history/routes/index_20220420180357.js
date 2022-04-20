const routes = require('express')


routes.get('/', (req, res) => {
  res.send('Ellen Fernandez')
})

module.exports = routes