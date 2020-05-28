const routes = require('express').Router()
const { User } = require('./app/models')

User.create({ name: 'Vinicius', email: 'vinicius@gmail.com', password_hash: '65465131' })

module.exports = routes