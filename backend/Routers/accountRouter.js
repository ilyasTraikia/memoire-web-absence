const express = require('express')
const router = express.Router()
const accountController = require('../Controllers/accountController')



router.get('/teachers', accountController.getAllTeachers)
router.get('/teacher/:id', accountController.getTeacherById)
router.get('/teacherP/:id', accountController.getTeacherPById)
router.post('/addTeacher', accountController.insertTeacher)
router.put('/updateTeacher/:id', accountController.UpdateTeacher)
router.put('/updateTeacherStatus/:id', accountController.updateTeacherStatus)

router.get('/chefdep/:id', accountController.getChefDepByPId)
router.put('/updateChefdep/:id', accountController.UpdateChefDep)

router.get('/admin/:id', accountController.getAdminByPId)
router.put('/updateAdmin/:id', accountController.UpdateAdminDep)

router.post('/login', accountController.login)
router.post('/loginTwo', accountController.loginAndroid)
router.post('/addPresenceAndroid', accountController.insertPresenceAndroid)




module.exports = router