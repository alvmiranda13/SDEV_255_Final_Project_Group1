const express = require('express');
const authController = require('../controllers/authController')
const auth = express.Router();


auth.get('/signup', authController.signup_get);
auth.post('/signup', authController.signup_post);
auth.get('/login', authController.login_get);
auth.post('/signup', authController.signup_post);
module.exports = auth;