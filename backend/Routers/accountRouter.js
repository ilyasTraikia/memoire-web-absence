const express = require('express')
const router = express.Router()
const accountController = require('../Controllers/accountController')


router.get('/teachers', accountController.getAllTeachers)
router.post('/addTeacher', accountController.insertTeacher)
router.put('/updateTeacher/:id', accountController.UpdateTeacher)
router.put('/updateTeacherStatus/:id', accountController.updateTeacherStatus)



module.exports = router