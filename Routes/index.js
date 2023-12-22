const express = require('express');
const router = express.Router();
const passport = require('passport');

const {signUp, signIn} = require('../Controller/User_Controller');
const {shortUrl, visitOriginalUrl} = require('../Controller/Url_Controller');

router.post('/signup',signUp);
router.post('/signin',signIn);


router.post('/shorten',passport.authenticate('jwt',{session:false}),shortUrl);
router.get('/:urlId',passport.authenticate('jwt',{session:false}),visitOriginalUrl);

module.exports = router;