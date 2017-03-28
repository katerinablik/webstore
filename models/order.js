var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongodb schema which will be stored in database
var orderSchema = mongoose.Schema({
    emailAdress: String,
    clientName: String,
    phoneNumber: String,
    orderedProduct: String,
    amount: Number,
    details: String,
    timeStamp: Date
});

// make it public for all classes which import the order.js file
module.exports = mongoose.model('Order', orderSchema);
