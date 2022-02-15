const express = require('express');
// const app = express();
const router = express.Router()

router.get('/', (req, res) => {
    const page = {
		title: "Home"
    };
    
	res.status(200).render('home', { 
		page: page,
	})
});

module.exports = router;