const express = require('express');
const router = express.Router();
const authController = require("../controllers/authorization");

router.get('/', authController.login);

module.exports = router;