const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')


router.get('/settings/Strands', adminController.getAllStrands)
router.post('/settings/addStrand', adminController.insertStrand)

router.get('/settings/Subjects', adminController.getAllSubjects)
router.post('/settings/addSubject', adminController.insertSubject)




module.exports = router