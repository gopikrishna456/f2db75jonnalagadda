var onion = require('../models/onion'); 
 
// List of all Costumes 
exports.onion_list = async function(req, res) { 
    try{ 
        theonions = await onion.find(); 
        res.send(theonions); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific onions. 
exports.onion_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle onion create on POST. 
exports.onion_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle onions delete form on DELETE. 
exports.onion_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Onions update form on PUT. 
exports.onion_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.onion_view_all_Page = async function(req, res) { 
    try{ 
        theonions = await onion.find(); 
        res.render('onion', { title: 'onion Search Results', onion_results: theonions }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.onion_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new onion(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Onion":"greyonion", "Dealer":"Mintfarms","price":10.40,"Rating":4.5,"Category":"few bf"} 
    document.Onion = req.body.Onion; 
    document.Dealer = req.body.Dealer; 
    document.price = req.body.price;
    document.Rating = req.body.Rating; 
    document.Category = req.body.Category;  

    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 