const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const { render } = require('express/lib/response');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require("./routes/authRoutes");

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
//
///
// middleware and staticc files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
///
//
/// view engine
app.set('view engine', 'ejs');
//navigation routing
app.use(courseRoutes);
//auth routing
app.use(authRoutes);
//error 404//
app.use((req,res)=>{
    res.status(404).render('404', { title: '404' });
});