const express = require('express');
const router = express.Router();
const controller = require("../controllers/messages");

router.get('/', controller.index);

module.exports = router;