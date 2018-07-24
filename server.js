const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/html-routes.js');
const ApiRoutes = require('./app/routing/api-routes.js');
const friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type:'application/vnd.api+json' }));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});