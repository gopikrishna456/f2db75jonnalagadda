
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var onion_controller = require('../controllers/onion'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/onion', onion_controller.onion_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/onion/:id', onion_controller.onion_delete); 
 
// PUT request to update Costume. 
router.put('/onion/:id', onion_controller.onion_update_put); 
 
// GET request for one Costume. 
router.get('/onion/:id', onion_controller.onion_detail); 
 
// GET request for list of all Costume items. 
router.get('/onion', onion_controller.onion_list); 
 
module.exports = router;