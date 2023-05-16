const express = require('express')
const router = express.Router()
const chefDepController = require('../Controllers/chefDepController')


router.get('/getAllGroups', chefDepController.getAllGroups)
router.get('/getAllSalles', chefDepController.getAllSalles)
router.get('/getAllSeances', chefDepController.getAllSeances)
router.get('/getAllSeances/:id', chefDepController.getAllSeancesByTeacher)
router.post('/insertSeance', chefDepController.insertSeance)



module.exports = router