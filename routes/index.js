const Controller = require('../controller')
const route = require('express').Router()

route.get('/users', Controller.getUsers)


module.exports = route