var onion = require('../models/onion'); 
 
// List of all onions 
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
    res.send('NOT IMPLEMENTED: onion detail: ' + req.params.id); 
}; 
 
// Handle onion create on POST. 
exports.onion_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: onion create POST'); 
}; 
 
// Handle onions delete form on DELETE. 
exports.onion_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: onion delete DELETE ' + req.params.id); 
}; 
 
// Handle Onions update form on PUT. 
exports.onion_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: onion update PUT' + req.params.id); 
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

// Handle onion create on POST. 
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



// for a specific onion. 
exports.onion_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await onion.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle onion update form on PUT. 
exports.onion_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await onion.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Onion)  
               toUpdate.Onion = req.body.Onion; 
        if(req.body.Dealer) toUpdate.Dealer = req.body.Dealer; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.Rating) toUpdate.Rating = req.body.Rating;
        if(req.body.Category) toUpdate.Category = req.body.Category;
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle onion delete on DELETE. 
exports.onion_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await onion.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 



// Handle a show one view with id specified by query 
exports.onion_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await onion.findById( req.query.id) 
        res.render('oniondetail',  
{ title: 'onion Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a onion. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.onion_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('onioncreate', { title: 'Onion Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a onion. 
// query provides the id 
exports.onion_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await onion.findById(req.query.id) 
        res.render('onionupdate', { title: 'onion Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.onion_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await onion.findById(req.query.id) 
        res.render('oniondelete', { title: 'onion Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 