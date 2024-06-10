const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const blogRoutes = require('./routes/ideaRoutes')
//app 
const app = express()

// ejs
app.set('view engine','ejs')
  

//connect to db
const dbURI = 'mongodb+srv://badri:jkhan09180848351@jkhan.izebbic.mongodb.net/jkhan?retryWrites=true&w=majority&appName=jkhan'

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
 
//middleware and static
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))  

// a such of middleware
app.use(morgan('tiny'))

//root
app.get('/',(req, res) => {
   
    res.redirect('ideas')
})

//about
app.get('/about',(req, res) => {
    res.render('about',{title: 'about'})
})

//idea routes
app.use('/ideas',blogRoutes)

//404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'})
}) 