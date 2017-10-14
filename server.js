var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Get all characters
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
}); 

const tables = [
{
	name: "Ash",
	phone: "3035555555",
	email: "ashemail@email.com"
	customerID: 1
}

];

app.get('/api/tables', function (req, res) {
  res.json(tables);
});

app.post('/api/reserve', function (req, res) {
	console.log('reservation submitted');
	console.log(req.body);

  var newReservation = req.body;

  tables.push(newReservation);

  // Check if user is in the first 5 in list
  var isBooked;
  if(tables.length <= 5){
    isBooked = true;
  }
  else{
    isBooked = false;
  }

  res.json(isBooked);

});


app.post('/api/clear', function (req, res) {
  console.log('clear all tables');
  tables = [];
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.post('/api/killreservation', function (req, res) {
  console.log(req.body.id);

  tables.splice(req.body.id, 1);
  res.json(tables);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});