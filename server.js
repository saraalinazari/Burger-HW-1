// Dependencies
// ==============================================================================
const express = require("express");
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
// const path = require("path"); don't need to require it?
const app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('app'));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");