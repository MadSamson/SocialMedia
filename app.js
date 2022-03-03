const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.get('/', (req, res)=>{
    res.render('landingPage.ejs')
})

app.get('/login', (req, res)=>{
    res.render('loginPage.ejs')
})

app.get('/register', (req, res)=>{
    res.render('register.ejs')
})

app.get('/register', (req, res)=>{

})

app.listen(port, ()=>console.log(`listening on port ${port})`))
