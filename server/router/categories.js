const express = require('express')
const CategoryController = require('../controller/categorycontroller')
const router = express.Router()

const { authentication } = require('../Middleware/authentication')

router.get('/',authentication,CategoryController.getAllCategories)
router.post('/',authentication,CategoryController.newCategory)



module.exports=router
