'use strict';

const express = require('express');
const router = express.Router();
const luxuryController = require('../controllers/luxury');
const othersController = require('../controllers/others');

/* -- Flight Pages -- */
/* GET home page. */
router.get('/', luxuryController.luxuryWelcome);
/* GET the product details page */
router.get('/luxury', luxuryController.luxuryDetails);
/* GET the appointment reservation page */
router.get('/luxury/luxury-reserve', luxuryController.luxuryReserve);

/* -- Other Pages -- */
router.get('/luxury-contact', othersController.luxuryContact);
/* GET about page */


module.exports = router;
