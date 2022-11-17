var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET home page. */
router.get('/detail', onion_controlers.onion_view_one_Page);

module.exports = router;