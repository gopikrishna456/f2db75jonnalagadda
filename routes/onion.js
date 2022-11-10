var express = require('express');
var router = express.Router();
const onion_controlers= require('../controllers/onion'); 

/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page );

 module.exports = router;