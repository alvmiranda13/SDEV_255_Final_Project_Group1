const express = require('express');
const courseController = require('../controllers/courseController')
const router = express.Router();
//render pages//
router.get('/', (req,res)=>{
    res.render('index', {title: 'home'});
});
router.get('/login', (req,res)=>{
    res.render('login', {title: 'login'});
});

////courses routes////
//shows all courses
router.get('/viewcourses', courseController.course_index);

//create a course
router.get('/createCourse', courseController.course_create_get);

//post new course
router.post('/viewcourses', courseController.course_create_post);

//view a single course
router.get('/viewcourses/:id', courseController.course_description);

//delete a course
router.get('/viewcourses/:id',courseController.course_delete);
//register student

router.get('/registration', (req,res)=>{
    
    res.render('registration', {title: 'registration'});
});


module.exports = router;
