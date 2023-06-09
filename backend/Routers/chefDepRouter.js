const express = require('express')
const router = express.Router()
const chefDepController = require('../Controllers/chefDepController')


router.get('/getAllGroups', chefDepController.getAllGroups)
router.get('/getAllSalles', chefDepController.getAllSalles)
router.get('/getAllSeances', chefDepController.getAllSeances)
router.get('/getAllSeancesTwo/:id', chefDepController.getAllSeancesTwo)

router.get('/getAllJustifications', chefDepController.getAllJustifications)
router.get('/getAllSeances/:id', chefDepController.getAllSeancesByTeacher)
router.post('/insertSeance', chefDepController.insertSeance)
router.put('/updateJustificationStatus/:id', chefDepController.UpdateJustificationStatus)
router.put('/updatePresenceStatus/:id', chefDepController.UpdatePresenceStatus)



module.exports = router