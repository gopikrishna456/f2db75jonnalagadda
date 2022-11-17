var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET update chickenDish page */
router.get('/update', onion_controlers.onion_update_Page);

module.exports = router;