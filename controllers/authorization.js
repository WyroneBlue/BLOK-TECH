const login = (req, res) => {
	const page = {
		title: "Login"
    };
	res.status(200).render('login', { 
		page: page,
	})
};

const register = (req, res) => {
	const page = {
		title: "Register"
    };

	res.status(200).render('register', { 
		page: page,
	})
};

const registerSuccess = (req, res) => {
	const page = {
		title: "Registered Succesfully"
    };
	console.log(req);
	const input = req.body;

	const form = {
		name: input.name,
		email: input.email,
		school: input.school,
	}

	res.status(200).render('registerSuccess', { 
		page: page,
		form: form,
	})
};

module.exports = {
    login: login,
    register: register,
    registerSuccess: registerSuccess,
};