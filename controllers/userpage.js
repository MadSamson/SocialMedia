const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const router = express.Router()
const {User} = require('../models/users')

router.use(express.urlencoded({extended:false}))

router.get('/', (req, res)=>{
    res.render('userpage.ejs')
})


module.exports = router