const express = require('express');
const mongoose = require('mongoose');
const Courses = require('./models/courses');
const path = require('path');
const app = express();
const { render } = require('express/lib/response');

/// mongoose db connect
const dbURI = 'mongodb+srv://user:passwordUser123@finalprojectdb.gffp0.mongodb.net/finalProjectDB?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    //keep this to makesure we are connected to db//
    .then((result)=> console.log('connected to db'))
    .catch((err) => console.log(err));

/// init bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

/// view engine
app.set('view engine', 'ejs');
//navigation routing

//render pages//
app.get('/', (req,res)=>{
    res.render('index', {title: 'home'});
});
app.get('/login', (req,res)=>{
    res.render('login', {title: 'login'});
});

////courses routes////
app.get('/courseDescription', (req,res)=>{
    //individual course descriptions
    res.render('courseDescription', {title: 'courseDescription'});
    
});
app.get('/viewcourses', (req,res)=>{
   //display all courses
    
    Courses.find()
    .then((result)=>{
        res.render('viewcourses', {title: 'Courses', Courses: result});        
    })
    .catch((err)=>{
        console.log(err)
    })
    
});
app.get('/registration', (req,res)=>{
    res.render('registration', {title: 'registration'});
});





//error 404//
app.use((req,res)=>{
    res.status(404).render('404', { title: '404' });
});
