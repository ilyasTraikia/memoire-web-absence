const express = require('express')
const router = express.Router()
const accountController = require('../Controllers/accountController')



router.get('/teachers', accountController.getAllTeachers)
router.get('/teacher/:id', accountController.getTeacherById)
router.get('/teacherP/:id', accountController.getTeacherPById)
router.post('/addTeacher', accountController.insertTeacher)
router.put('/updateTeacher/:id', accountController.UpdateTeacher)
router.put('/updateTeacherStatus/:id', accountController.updateTeacherStatus)

router.post('/login', accountController.login)




module.exports = router