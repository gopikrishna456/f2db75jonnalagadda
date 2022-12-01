var express = require('express');
var router = express.Router();
const onion_controlers= require('../controllers/onion'); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page );
router.get('/detail',secured, onion_controlers.onion_view_one_Page); 
router.get('/create',secured, onion_controlers.onion_create_Page); 
router.get('/update', onion_controlers.onion_update_Page); 

 module.exports = router;