const express = require('express')
const router = require('./routes/url.route')
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//routes
app.use(router)

module.exports = app