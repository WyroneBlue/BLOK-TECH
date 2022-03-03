const express = require('express');
const router = express.Router();

const home  = require('./home');
const login  = require('./login');
const register  = require('./register');
const restaurants  = require('./restaurants');
const matches  = require('./matches');
const error  = require('./error');

router.use('/', home)
router.use('/login', login)
router.use('/register', register)
router.use('/restaurants', restaurants)
router.use('/matches', matches)
router.use('*', error)

module.exports = router