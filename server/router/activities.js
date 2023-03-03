const express = require('express')
const ActivityController = require('../controller/activitycontroller')
const { authentication } = require('../Middleware/authentication')


const router = express.Router()

router.get('/',authentication,ActivityController.getUserActivities)
router.post('/',authentication,ActivityController.newActivity)
router.get('/:id',authentication,ActivityController.getDetailActivity)
router.patch('/name/:id',authentication,ActivityController.editActivity)
router.delete('/:id',authentication,ActivityController.deleteActivity)
router.patch('/:id',authentication,ActivityController.markActivity)


module.exports=router