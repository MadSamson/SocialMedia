const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')

const {User} = require('../models/users')
const router = express.Router()

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
router.use(session({secret: 'avsd1234', resave: false, saveUninitialized: false}))

router.use(express.urlencoded({extended: false}))

router.use(passport.authenticate("session"))

router.get('/', (req, res) => {
  res.render("register.ejs")
})

router.post('/', async (req, res) => {
  const {username, password} = req.body
  const user = new User({username})
  await user.setPassword(password)
  await user.save()
  res.redirect('login')
});

module.exports = router