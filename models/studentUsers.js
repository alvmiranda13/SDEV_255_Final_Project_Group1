const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const bcrypt = require('bcrypt');
const studentSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, 'Please Enter a username.'],
        lowercase: false,
        required: true,
    },
    password:{
        type: String,
        required: [true, 'Please enter a password.'],
        minlength: [8,"Minumum length for a password is 8 characters."],
    },
    firstName:{
        type: String,
        required: [true, 'Please enter your first name.'],
    },
    lastName:{
        type: String,
        required: [true,'Please enter your last name.'],
    }
});
// this will hash the password 
studentSchema.pre('save', async function (next){
    console.log('user is about to be created', this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
const studentUser = mongoose.model('studentUser', studentSchema);

module.exports = studentUser;