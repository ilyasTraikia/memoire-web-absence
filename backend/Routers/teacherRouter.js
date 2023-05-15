const express = require('express')
const router = express.Router()
const teacherController = require('../Controllers/teacherController')


router.get('/getAllPresences', teacherController.getAllPresences)



module.exports = router