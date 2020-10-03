//Dependencies
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myconnection = require('express-myconnection')

//Initialization
const app = express()

//Importing database key
const database = require('./database/keys.js')

//Importing routes
const mainRoute = require('./routes/main.js');

//Settings
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Middleware
app.use(morgan('dev'))
app.use(myconnection(mysql, database, 'single'))
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/', mainRoute);

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 4000')
})