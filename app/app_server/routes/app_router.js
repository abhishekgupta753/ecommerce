'use strict';

const express = require('express');
const router = express.Router();
const luxuryController = require('../controllers/luxury');
const othersController = require('../controllers/others');

/* -- Flight Pages -- */
/* GET home page. */
router.get('/', luxuryController.luxuryWelcome);
/* GET the product details page */
router.get('/products', luxuryController.luxuryDetails);
/* GET the appointment reservation page */
router.get('/reserve', luxuryController.luxuryReserve);

/* -- Other Pages -- */
router.get('/contact', luxuryController.luxuryContact);
/* GET about page */
/*router.get('/about', othersController.about);*/

module.exports = router;
