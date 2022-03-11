const Restaurant = require('../models/Restaurant');
const Rating = require('../models/Rating');

const index = (req, res) => {
	
	Promise.all([Restaurant.find({}).lean()])
    .then(result => {
		const [restaurants] = result;
		const page = {
			title: "Restaurants"
		};

		res.status(200).render('restaurants/index', { 
			page: page,
			restaurants: restaurants,
		})
    })
};

const show = (req, res) => {

	Promise.all([Restaurant.findOne({slug: req.params.slug}).lean(), User.find({}).lean()])
    .then(result => {
		const [restaurant, users] = result;

		const page = {
			title: restaurant.name
		};
		
		res.status(200).render('restaurants/show', { 
			page: page,
			restaurant: restaurant,
			users: users,
		})
    })
};


const reviews = (req, res) => {
	const page = {
		title: "Restaurants Reviews"
    };
	const restaurant_id = req.params.id;
	console.log(restaurant_id);
	res.status(200).render('restaurants/reviews', { 
		page: page,
		restaurant_id: restaurant_id,
	})
};

const rating = (req, res) => {
	const page = {
		title: "Restaurants Rating"
    };
	const restaurant_id = req.params.id;
	console.log(restaurant_id);
	res.status(200).render('restaurants/ratingForm', { 
		page: page,
		restaurant_id: restaurant_id,
	})
};

const saveRating = (req, res) => {
	const page = {
		title: "Rating Saved"
    };

	const input = req.body;
	const form = {
		restaurant_slug: req.params.slug,
		user_id: 0,
		rating: input.rating,
		remark: input.remark,
		anon: input.anon === 'on' ? true : false,
	}
	console.log(form);
	const rating = new Rating(form);

	rating.save((err) => {
		console.log(err);
		if (err) return handleError(err);
		// saved!
	});

	res.status(200).render('home', { 
		page: page,
	})
};

module.exports = {
    index: index,
    show: show,
	rating: rating,
	reviews: reviews,
	saveRating: saveRating,
};