const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const page = {
		title: "Matches"
    };
	res.status(200).render('matches', { 
		page: page,
	})
});

module.exports = router;