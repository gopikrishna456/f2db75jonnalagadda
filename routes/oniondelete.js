var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET update chickenDish page */
router.get('/delete', onion_controlers.onion_delete_Page);

module.exports = router;