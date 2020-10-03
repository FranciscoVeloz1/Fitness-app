const express = require('express')
const template = require('../controllers/templateController.js')
const router = express.Router()

router.get('/', template.list)

router.post('/add', template.save)

router.get('/update/:id', template.edit)

router.post('/update/:id', template.update)

router.get('/delete/:id', template.delete)



module.exports = router 