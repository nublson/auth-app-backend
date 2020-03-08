const routes = require('express').Router()

const sessionController = require('./app/controllers/sessionController')

routes.post('/sessions', sessionController.store)

module.exports = routes
