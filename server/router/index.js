const express = require('express')
const router = express.Router()


const activity = require('./activities')
const user = require('./users')
const category = require('./categories')



router.use('/activities',activity)
router.use('/users',user)
router.use('/categories',category)

module.exports=router