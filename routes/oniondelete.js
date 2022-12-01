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
/* GET update chickenDish page */
router.get('/delete',secured, onion_controlers.onion_delete_Page);

module.exports = router;