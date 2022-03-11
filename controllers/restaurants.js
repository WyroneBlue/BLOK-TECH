const User = require('../models/User');
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

	Promise.all([Restaurant.findOne({slug: req.params.slug}).lean(), Rating.find({ restaurant_slug: req.params.slug}).lean()])
    .then(result => {
		const [restaurant, reviews] = result;

		const page = {
			title: `${restaurant.name} reviews`
		};
		
		res.status(200).render('restaurants/reviews', { 
			page: page,
			restaurant: restaurant,
			reviews: reviews,
		})
    })
};

const rating = (req, res) => {
	Promise.all([Restaurant.findOne({slug: req.params.slug}).lean()])
    .then(result => {
		const [restaurant] = result;

		const page = {
			title: `Rate ${restaurant.name}`
		};

		res.status(200).render('restaurants/ratingForm', { 
			page: page,
			restaurant: restaurant,
		})
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

	const rating = new Rating(form);

	rating.save((err) => {
		if (err) return handleError(err);
		// saved!
		Promise.all([Restaurant.findOne({slug: req.params.slug}).lean(), Rating.find({ restaurant_slug: req.params.slug}).lean()])
		.then(result => {
			const [restaurant, reviews] = result;
			res.status(200).render('restaurants/reviews', { 
				page: page,
				restaurant: restaurant,
				reviews: reviews,
			})
		});
	})
};

module.exports = {
    index: index,
    show: show,
	rating: rating,
	reviews: reviews,
	saveRating: saveRating,
};