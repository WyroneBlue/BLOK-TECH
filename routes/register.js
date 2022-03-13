const express = require('express');
const router = express.Router();
const authController = require("../controllers/authorization");

router.get('/', authController.register);
router.get('/success', authController.registerSuccess);
router.post('/success', authController.registerSuccess);

module.exports = router;