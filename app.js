var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var onion=require("./models/onion");


require('dotenv').config() 
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  {useNewUrlParser: true, useUnifiedTopology: true}); 


var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
console.log("Connection to DB succeeded")}); 




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appRouter = require('./routes/onion');
var gridbuildRouter = require('./routes/gridbuild');
var selector=require('./routes/selector');
var resourceRouter=require('./routes/resource');
//const onion = require("./models/onion");




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/onion', appRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selector);
app.use('/resource',resourceRouter)


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await onion.deleteMany();
  let instance1 = new
 onion({Onion:"Redonion", Dealer:"Nike farms",price:4.0,Rating:4.7,Category:"fgegi"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First Bag details saved")
  });
  let instance2 = new
  onion({Onion:"blackonion", Dealer:"Michealfarms",price:10.0,Rating:4.2,Category:"bfjeb"});
   instance2.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("Second Bag details saved")
   });
   let instance3 = new
   onion({Onion:"yellowonion", Dealer:"Adidas farms",price:11.0,Rating:4.6,Category:"hbebfj"});
    instance3.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Third Bag details saved")
    });
 }
 let reseed = true;
 if (reseed) { recreateDB();}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


