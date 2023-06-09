const express = require('express')
const router = express.Router()
const teacherController = require('../Controllers/teacherController')


router.get('/getAllPresences', teacherController.getAllPresences)
router.post('/insertAnnonce/:id', teacherController.insertAnnonce)
router.get('/getAnnonceByTeacher/:id', teacherController.getAllAnnoncesByTeacher)
router.get('/getAnnonceByGroupe/:id', teacherController.getAllAnnoncesByTGroupe)




module.exports = router