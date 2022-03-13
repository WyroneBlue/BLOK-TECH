const index = (req, res) => {
	const page = {
		title: "Matches"
	};
    
	res.status(200).render('matches/index', { 
		page: page,
	});
};

module.exports = {
	index: index
};