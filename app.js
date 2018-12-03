//Require all npm modules.
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

//Initialize express app.
const app = express();

//Set the port for the program to run on.
const port = 8000;

//Set the view engine to use ejs.
app.set('view engine', 'ejs');
//Set up the views directory.
app.set('views', path.join(__dirname, 'views'));
//Set up public directory.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
//Configure body parser.
app.use(bodyParser.urlencoded({ extended: true }));

//Require our routes file.
require('./config/routes.js')(app);

//Listen on the defined port and send a message to the console.
app.listen(port);
console.log("Website running on port " + port);
