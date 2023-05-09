const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')


router.get('/settings/Strands', adminController.getAllStrands)
router.post('/settings/addStrand', adminController.insertStrand)

router.get('/settings/Subjects', adminController.getAllSubjects)
router.post('/settings/addSubject', adminController.insertSubject)

router.get('/students', adminController.getAllStudents)
router.post('/addStudent', adminController.insertStudent)
router.put('/updateStudentStatus/:id', adminController.updateStudentStatus)
router.put('/updateStudent/:id', adminController.UpdateStudent)


router.get('/student/:id', adminController.getStudentById)





module.exports = router