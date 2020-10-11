const { Router } = require('express')
const controller = require('../controllers/mainController.js')

class MainRouter {
    constructor() {
        this.router = Router();
        this.Config()
    }

    Config() {
        this.router.get('/', controller.list)
        this.router.post('/add', controller.save)
    }
}

const mainRouter = new MainRouter()

module.exports = mainRouter.router