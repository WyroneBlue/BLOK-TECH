const express = require('express');
// const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	const page = {
		title: "Login"
    };
	res.status(200).render('login', { 
		page: page,
	})
});

module.exports = router;