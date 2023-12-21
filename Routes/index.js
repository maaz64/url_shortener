const express = require('express');
const router = express.Router();
const {home, shortUrl, visitOriginalUrl} = require('../Controller/Url_Controller');
const {signUp, signIn} = require('../Controller/User_Controller');

// router.get('/', home)
router.post('/shorten',shortUrl);
router.get('/:urlId',visitOriginalUrl);


router.post('/signup',signUp);
router.post('/signin',signIn);

module.exports = router;