
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(express.urlencoded({extended:false}))

router.get('/', (req, res)=>{
    res.render('loginPage.ejs')
})

router.post('/', async(req, res)=>{
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(username, hashedPassword)
})
module.exports = router