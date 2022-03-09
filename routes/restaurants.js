const express = require('express');
const router = express.Router();
const restaurantController = require("../controllers/restaurants");

router.get('/', restaurantController.index);
router.get('/:id', restaurantController.show);
router.get('/:id/reviews', restaurantController.reviews);
router.get('/:id/rate', restaurantController.rating);
router.post('/:id/rate', restaurantController.saveRating);

module.exports = router;