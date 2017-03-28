'use strict';
var mongoose = require('mongoose');
var orderModel = require('../models/order.js');

// create connection to mongodb to the orders collection
mongoose.connect('mongodb://localhost/orders');
var db = mongoose.connection;
// check is connection was successfull or an error occured
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to  mongodb');
});

// function to add order to database
exports.addOrderToDB = function(req, res) {
    //console.log(req.body.name);
    // create new model with attributes from the html form which is submitted in the http body
    var newOrder = new orderModel({
      emailAdress: req.body.email,
      clientName: req.body.name,
      phoneNumber: req.body.phoneNumber,
      orderedProduct: req.body.productType,
      amount: req.body.numberOfItems,
      details: req.body.details,
      timeStamp: new Date()
    });
    //function to save the orderModel object to mongodb. on success redirect to success page
    newOrder.save(function(err){
      if(err) return;
      else {
        res.redirect('/saveSuccess');
      }
    });
}
