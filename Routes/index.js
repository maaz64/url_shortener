// importing required modules and files
const express = require('express');
const router = express.Router();
const passport = require('passport');

// importing user controller
const {signUp, signIn} = require('../Controller/User_Controller');

// importing url controller
const {shortUrl, visitOriginalUrl} = require('../Controller/Url_Controller');

// creating sign up routes
router.post('/signup',signUp);

// creating sign in routes
router.post('/signin',signIn);

// creating post routes for url shortener
router.post('/shorten',passport.authenticate('jwt',{session:false}),shortUrl);

// creating routes to visit the original url using shortened url
router.get('/:urlId',passport.authenticate('jwt',{session:false}),visitOriginalUrl);


// exporting the router
module.exports = router;