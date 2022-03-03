const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const page = {
		title: "Restaurants"
    };

	const movies = [
        {
          	name: "Spiderman: No Way Home",
          	release: "2021"
        },
        {
			name: "James Bond",
			release: "2021"
        },
        {
			name: "Don't Look Up",
			release: "2021"
        },
	]

	res.status(200).render('restaurants', { 
		page: page,
		movies: movies,
	})
});

module.exports = router;