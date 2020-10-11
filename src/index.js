//Dependencies
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myconnection = require('express-myconnection')

//Importing database key
const database = require('./database/keys.js')

//Importing routes
const mainRoute = require('./routes/main.js');

class Server {
    constructor() {
        this.app = express()
        this.Settings()
        this.Middleware()
        this.Routes()
        this.StaticFiles()
    }

    Settings() {
        this.app.set('port', process.env.PORT || 4000)
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, 'views'))
    }

    Middleware() {
        this.app.use(morgan('dev'))
        this.app.use(myconnection(mysql, database, 'single'))
        this.app.use(express.urlencoded({ extended: false }))
    }

    Routes() {
        this.app.use('/', mainRoute);
    }

    StaticFiles() {
        this.app.use(express.static(path.join(__dirname, 'public')))
    }

    Start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ' + this.app.get('port'))
        })
    }
}

const server = new Server()
server.Start()