//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//static content for the app from the "public directory" in the application directory.
// app.use(express.static("public"));

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./controllers/burgers_controllers.js");
//app.use('/', router);

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });