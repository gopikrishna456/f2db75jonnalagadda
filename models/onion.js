const mongoose = require("mongoose") 
const onionSchema = mongoose.Schema({ 
 Onion: String, 
 Dealer: String, 
 price: Number,
 Rating:Number,
 Category:String

}) 
 
module.exports = mongoose.model("onion", 
onionSchema) 
