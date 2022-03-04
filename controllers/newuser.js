
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const {User} = require('../models/users')


router.get('/', (req, res)=>{
    res.render('register.ejs')
})

router.post('/', async (req, res)=>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await new User({username, password: hashedPassword})
    user.save()
    res.redirect('/')
})

module.exports = router