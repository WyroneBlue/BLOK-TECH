const express = require('express');
const router = express.Router();
const restaurantController = require("../controllers/restaurants");

router.get('/', restaurantController.index);
router.get('/:slug', restaurantController.show);
router.get('/:slug/reviews', restaurantController.reviews);
router.get('/:slug/rate', restaurantController.rating);
router.post('/:slug/rate', restaurantController.saveRating);

module.exports = router;