//importing the modules
var express = require('express');
var router = express.Router();


var defaultController = require('../Controller/defaultController');

router.route('/me')
    .get(defaultController.me);

router.route('/me/:name')
    .get(defaultController.name);

//Do not touch this below
router.route('/')
    .get(defaultController.index);

router.route('/about')
    .get(defaultController.about);

router.route('/team')
    .get(defaultController.team);

router.route('/services')
    .get(defaultController.service);

router.route('/industry')
    .get(defaultController.industry);

router.route('/client')
    .get(defaultController.client);

router.route('/career')
    .get(defaultController.career);

router.route('/contact')
    .get(defaultController.contact)
    .post(defaultController.contact);

module.exports = router;