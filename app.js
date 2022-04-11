const express = require('express');
const app = express();;
/// view engine
app.set('view engine', 'ejs');
//port set
app.listen(3000);
//navigation routing

//render index page
app.get('/', (req,res)=>{
    res.render('index', {title: 'home'});
});
//
