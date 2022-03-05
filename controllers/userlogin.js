
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const {User} = require('../models/users')

router.use(express.urlencoded({extended:false}))

router.get('/', (req, res)=>{
    res.render('loginPage.ejs')
})

router.post('/', async(req, res)=>{
    let user = await User.findOne({username: req.body.username});
    if (!user) return res.status(400).redirect('/login')

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).redirect('/login')

    res.render('userpage.ejs', {username: req.body.username})
})

module.exports = router