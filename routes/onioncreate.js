var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET create chickenDish page */
router.get('/create', onion_controlers.onion_create_Page);

module.exports = router;