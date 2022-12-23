//import { Router } from 'express'
//import { insertUser, selectUsers } from './controllers/UserController/index.js'
const { Router } = require('express')
const { insertUser, selectUsers } = require('./controllers/UserController/index.js')

const routes = Router()

routes.get('/health', (req,res) => {
    console.log('funciona', req)
    res.send('funciona')
})

routes.get('/users', selectUsers)
routes.post('/insertUser', insertUser)


module.exports = routes
