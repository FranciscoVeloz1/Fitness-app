const { Router } = require('express')
const controller = require('../controllers/mainController.js')

class MainRouter {
    constructor() {
        this.router = Router();
        this.Config()
    }

    Config() {
        this.router.get('/', controller.List)
        this.router.post('/add', controller.Save)
        this.router.get('/update/:id', controller.Edit)
        this.router.post('/update/:id', controller.Update)
        this.router.get('/delete/:id', controller.Delete)
    }
}

module.exports = new MainRouter().router