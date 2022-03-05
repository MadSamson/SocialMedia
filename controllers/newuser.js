const express = require('express')
const session = require('express-session')

const {User} = require('../models/users')
const router = express.Router()

router.use(session({secret: 'avsd1234', resave: false, saveUninitialized: false}))

router.use(express.urlencoded({extended: false}))

router.get('/', (req, res) => {
  res.render("register.ejs")
})

router.post('/', async(req, res) => {
  let user = await User.findOne({username: req.body.username});
  if (user) return res.status(400).redirect('/register')

  user = new User(req.body)
  await user.save()
  res.redirect('/login')

})
module.exports = router