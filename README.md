# Burger-HW
Can you relate to Patrick or Homer?

<img src="https://user-images.githubusercontent.com/29084524/33186776-285440de-d041-11e7-8450-2eda2b78aad7.gif" width="425"/> <img src="https://user-images.githubusercontent.com/29084524/33186775-28391f34-d041-11e7-948e-4b811daa2ec7.gif" width="425"/>

## Instructions
Well just mosey on down to the live site []() and create your own burger masterpiece! (Or take a gander at our house favorites... while supplies last)

![alt text](https://user-images.githubusercontent.com/29084524/33225657-a7f3ea7a-d130-11e7-9da9-61a45d2037dc.png)

Once the burger is up, click on the eat me button to devour that son of a B.

### Prerequisites
+ Download [Chrome](https://www.google.com/chrome/browser/desktop/index.html) for your specific operating system.

## Requirements
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Code Higlights

### Using ORM functions in the routes and rendering the data with handlebars
Here I've required the ORM functions from the model and use them inside the routes to display/render the data coming back from the calls with handlebars. This showed me that modularizing my application allowed for not only cleaner code but scalability as the app grows.

```
const express = require("express");
const moment = require("moment");
const router = express.Router();

// Import the model to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
burger.selectAll(function(data) {
var hbsObject = {
burgers: data
};
console.log(hbsObject);
res.render("index", hbsObject);
});
});

router.get("/api/burgers", function(req, res) {
burger.selectAll(function(data) {
var hbsObject = {
burgers: data
};
res.json(hbsObject)
});
});

//values of the colums name and sleepy, look at mvc 17 especially index and partials to see how to render on the page

router.post("/api/burgers", function(req, res) {

var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

burger.insertOne([
"burger_name", "devoured", "date"
], [
req.body.burger_name, req.body.devoured, mysqlTimestamp
], function(result) {
// Send back the ID of the new burger
res.json({ id: result.insertId });
});
});

router.put("/api/burgers/:id", function(req, res) {
var condition = "id = " + req.params.id;

console.log("condition", condition);

burger.updateOne({
devoured: req.body.devoured
}, condition, function(result) {
if (result.changedRows == 0) {
// If no rows were changed, then the ID must not exist, so 404
return res.status(404).end();
} else {
res.status(200).end();
}
});
});

// Export routes for server.js to use.
module.exports = router;
```

## Built With
+ [Node.js](https://nodejs.org/en/)
+ [Express.js NPM Package](https://www.npmjs.com/package/express)
+ [Body Parser NPM Package](https://www.npmjs.com/package/body-parser)
+ [Express Handlebars NPM Package](https://www.npmjs.com/package/express-handlebars)
+ [Moment.js](http://momentjs.com/)
+ [MySQL](https://www.npmjs.com/package/mysql)
+ [Bootstrap 4](https://getbootstrap.com/)
+ [Font Awesome](http://fontawesome.io/icons/)
+ [Backstretch.js](http://www.jquery-backstretch.com/)
+ [Google Fonts](https://fonts.google.com/)
+ [Heroku](https://dashboard.heroku.com/)

### Authors
+ [Alex Edward Ball](https://github.com/AlexEBall)
