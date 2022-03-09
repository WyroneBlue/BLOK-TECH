const index = (req, res) => {
    const page = {
		title: "Profile"
    };
    
	res.status(200).render('profile/index', { 
		page: page,
	})
};

module.exports = {
	index: index,
};