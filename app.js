const express = require('express');
const path = require('path');
const app = express();
/// init bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

/// view engine
app.set('view engine', 'ejs');
//port set
app.listen(3000);
//navigation routing

//render pages//
app.get('/', (req,res)=>{
    res.render('index', {title: 'home'});
});
app.get('/login', (req,res)=>{
    res.render('login', {title: 'login'});
});
app.get('/courseDescription', (req,res)=>{
    res.render('courseDescription', {title: 'courseDescription'});
});
app.get('/courses', (req,res)=>{
    res.render('courses', {title: 'courses'});
});
app.get('/registration', (req,res)=>{
    res.render('registration', {title: 'registration'});
});





//error 404//
app.use((req,res)=>{
    res.status(404).render('404', { title: '404' });
});
