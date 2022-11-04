var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('onion', { title: 'Search Results for Onion Class' });
 });

 module.exports = router;