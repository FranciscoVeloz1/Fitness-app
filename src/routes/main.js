const express = require('express')
const controller = require('../controllers/mainController.js')
const router = express.Router()

router.get('/', controller.list)

router.post('/add', controller.save)

module.exports = router