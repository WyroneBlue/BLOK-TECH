const { User, Restaurant, Rating } = require('../models');
const { avgFromObject } = require('../utils/Functions');

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

	Promise.all([Restaurant.findOne({slug: req.params.slug}).lean(), User.find({}).lean(), Rating.find({ restaurant_slug: req.params.slug}).lean() ])
    .then(result => {
		const [restaurant, users, reviews] = result;

		const page = {
			title: restaurant.name
		};

		const avg = avgFromObject(reviews, 'rating').toFixed(1);
				
		res.status(200).render('restaurants/show', { 
			page: page,
			restaurant: restaurant,
			users: users,
			avg: avg,
		})
    })
};


const reviews = (req, res) => {

	const promises = [
		Restaurant.findOne({slug: req.params.slug}).lean(), 
		Rating.find({ restaurant_slug: req.params.slug}).populate("user").sort({ created: -1 }).lean()
	];
	
	Promise.all(promises)
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

	Promise.all([User.findOne({_id: process.env.USER_ID}).lean()])
	.then(result => {
		const [user] = result;

		const input = req.body;
		const form = {
			restaurant_slug: req.params.slug,
			user_id: process.env.USER_ID,
			rating: input.rating,
			remark: input.remark,
			anon: input.anon === 'on' ? true : false,
			user: user
		}


		const rating = new Rating(form);
		
		rating.save((err) => {
			if (err) return handleError(err);
			res.redirect(`/restaurants/${form.restaurant_slug}/reviews`);
		})
	})
};

module.exports = {
    index: index,
    show: show,
	rating: rating,
	reviews: reviews,
	saveRating: saveRating,
};