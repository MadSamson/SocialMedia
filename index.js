const express = require('express')
const mongoose = require('mongoose')


const newUserController = require('./controllers/newuser')
const userLoginController = require('./controllers/userlogin')



const app = express()
const port = 3000


app.use(express.urlencoded({extended: false}))
app.get('/', (req, res)=>{
    res.render('landingPage.ejs')
})

app.use('/login', userLoginController)
app.use('/register', newUserController)


mongoose.connect('mongodb://localhost:27017/backend10')

app.listen(port, ()=>console.log(`listening on port ${port})`))
