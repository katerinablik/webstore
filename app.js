var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var Controller = require('./controllers/controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.

/******** ROUTES ********/
app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.get('/saveSuccess', function(req, res){
    res.sendFile(__dirname+'/View/thankspage.html');
});

app.post('/saveOrder', function(req, res) {
    Controller.addOrderToDB(req, res);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
