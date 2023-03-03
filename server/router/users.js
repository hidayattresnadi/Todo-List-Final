const express = require('express')
const UserController = require('../controller/usercontroller')
// const CategoryController = require('../controller/categoryController')

const router = express.Router()

router.post('/register',UserController.register)
router.post('/login',UserController.login)
// router.get('/',CategoryController.showCategories)
// router.post('/',CategoryController.addCategory)
// router.delete('/:categoryId',CategoryController.deleteCategory)

module.exports=router