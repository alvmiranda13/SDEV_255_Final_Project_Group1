const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

/// courses objects
const coursesSchema = new Schema({
    courseTitle: {
        type: String,
        required: true
    },
    courseInstructor:{
        type: String,
        required: true
    },
    courseSnippet:{
        type: String,
        required: true
    },
    courseDescription:{
        type: String,
        required: true
    },

},{timestamps: true});
//
const Courses = mongoose.model('Courses', coursesSchema);
module.exports = Courses;
