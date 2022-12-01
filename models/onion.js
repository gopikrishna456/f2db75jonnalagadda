const mongoose = require("mongoose") 
const onionSchema = mongoose.Schema({ 
 Onion: {
    type:String,
    required:true
 }, 
 Dealer: {
    type:String,
    required:true
 }, 
 price: {
    type:Number,
    required:true,
    min:0
 },
 Rating:{
    type:Number,
    required:true,
    min:0,
    max:10
 },
 Category:{
    type:String,
    required:true
 }

}) 
 
module.exports = mongoose.model("onion", 
onionSchema) 
