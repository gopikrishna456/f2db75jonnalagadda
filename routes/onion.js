var express = require('express');
var router = express.Router();
const onion_controlers= require('../controllers/onion'); 

/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page );
router.get('/detail', onion_controlers.onion_view_one_Page); 
router.get('/create', onion_controlers.onion_create_Page); 
//router.get('/update', onion_controlers.onion_update_Page); 
 module.exports = router;