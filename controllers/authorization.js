const User = require('../models/User');

const login = (req, res) => {
	const page = {
		title: "Login"
    };
	res.status(200).render('auth/login', { 
		page: page,
	})
};

const register = (req, res) => {
	const page = {
		title: "Register"
    };

	res.status(200).render('auth/register', { 
		page: page,
	})
};

const registerSuccess = (req, res) => {
	const page = {
		title: "Registered Succesfully"
    };
	const input = req.body;
	const form = {
		name: input.name,
		email: input.email,
		school: input.school,
	}
	const user = new User(form);
	user.save((err) => {
		if (err) return handleError(err);
		// saved!
	});

	res.status(200).render('auth/registerSuccess', { 
		page: page,
		form: form,
	})
};

module.exports = {
    login: login,
    register: register,
    registerSuccess: registerSuccess,
};