const studentUser = require('../models/studentUsers');
const jwt = require('jsonwebtoken');

const handelErrors = (err)=>{
    console.log(err.message, err.code);
    let errors = {username:'', password:'', firstName:'', lastName:''};
    // duplicate rror code
    if(err.code === 11000){
        errors.username = 'that username already exists'
        return errors;
    }
    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors['properties.path'] = properties.message;
        })
    }
    return errors;
}
// age of token
const maxAge = 3* 24 * 60 * 60;
//creates token
const createToken = (id)=>{
    return jwt.sign({ id },'net ninja secret', {
        expiresIn: maxAge
    });
}

module.exports.signup_get = (req,res) => {
    res.render('signup', {title: 'Sign Up'});
}

module.exports.signup_post = async (req,res)=>{
    // we want to grab these
    const {username, password, firstName, lastName} = req.body;
    //try to create a user with these properties by using a try catch 
    try{
        // async returns a promise
        const user = await studentUser.create({username, password, firstName, lastName}) 
        // create token//
        const token = createToken(user._id);
        res.cookie('jwt', token,{httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({studentUser: user._id});
    }catch(err){
        // if there is an err
        const errors = handelErrors(err);
        res.status(400).json({ errors });
    }

    console.log(username,password,firstName,lastName);
    //do not ressend when there is a json parser, will cause errors. 

    
}

module.exports.login_post = async (req,res)=>{
    const {username, password} = req.body;
    console.log(username,password);
}

module.exports.login_get = (req,res) => {
    res.render('login', {title: 'login'});
};
