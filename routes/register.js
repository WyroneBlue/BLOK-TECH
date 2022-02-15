const express = require('express');
// const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	const page = {
		title: "Register"
    };

	res.status(200).render('register', { 
		page: page,
	})
});

module.exports = router;