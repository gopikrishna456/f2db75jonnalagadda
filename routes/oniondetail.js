var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/detail',secured, onion_controlers.onion_view_one_Page);

module.exports = router;