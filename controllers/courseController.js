const Courses = require('../models/courses');
const course_index = (req,res) =>{
    const course = Courses;
    course.find()
    .then((result)=>{
        res.render('viewcourses', {title: 'Courses', course: result});        
    })
    .catch((err)=>{
        console.log(err);
    })
}
const course_description = (req,res)=>{
    const id = req.params.id;
    Courses.findById(id)
    .then((result)=>{
        res.render('courseDescription', {title: 'Course Details', course: result})
    })
    .catch((err)=>{
        console.log(err)
    })

} 
const course_create_get = (req,res) =>{
    res.render('createCourse', {title: 'Create Course'});   
}

const course_create_post = (req,res) =>{
    const course = new Courses(req.body);
    course.save()
    .then((result)=>{
        res.redirect('/viewcourses')
    })
    .catch((err)=>{
        console.log(err);
    })
}
const course_delete =(req,res) =>{
    const id = req.params.id;
    
    Courses.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/viewcourses'})
    })
    .catch(err => {
        console.log(err);
    })
}
module.exports={
    course_index,
    course_description,
    course_create_get,
    course_create_post,
    course_delete

}
