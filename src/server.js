//import express from 'express';
//import routes from './routes.js';
const express = require('express')
const routes = require('./routes.js')

const app = express()
app.use(express.json())

app.use(routes)

//export default app
module.exports = app