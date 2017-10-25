'use strict';

const luxuryWelcome = function(req, res) {
  res.render('index', { title: 'Concept Luxury' });
};

const luxuryDetails = function(req, res) {
  res.render('luxury-details', { title: 'Luxury toys just for YOU' });
};

const luxuryReserve = function(req, res) {
  res.render('luxury-reserve', { title: 'Reserve a Booking' });
};

const luxuryContact = function(req, res) {
  res.render('luxury-contact', { title: 'Talk to CEO' });
};

module.exports = {
    luxuryWelcome,
    luxuryDetails,
    luxuryReserve,
	luxuryContact
};
