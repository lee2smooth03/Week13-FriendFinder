/**
 * GT Coding Bootcamp: Week 13 Homework
 * ------------------------------------
 * server is the entry point for the friend-finder app
 * requires express, body-parser, and path
 */

var bParser = require("body-parser");   //from npm
var express = require("express");       //from npm
var path    = require("path");          //npm 

/**
 * ==============================================================================
 * Express Configuration
 * This sets up the basic properties for our express server
 * ==============================================================================
 */

/** Tells node that we are creating an "express" server */
var app = express();

/** Sets an initial port; if that port isn't available, we'll use 8080 */
var PORT = process.env.PORT || 8080;

/**
 * BodyParser makes it possible for our server to interpret data sent.
 * The code below is pretty standard.
 */

app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));
app.use(bParser.text());
app.use(bParser.json({ type: "application/vnd.api+json" }));

/**
 * ==============================================================================
 * Router
 * The below points our server to a series of "route" files.
 * These routes give our server a "map" of how to respond when users visit or 
 * request data from various URLs.
 * ================================================================================
 */

require("./app/routing/apiRoutes")(app);  //requires a file that returns a fxn; IIFE
require("./app/routing/htmlRoutes")(app); //requires a file that returns a fxn; IIFE

app.listen(PORT, function(){
    console.log("This app is listening on port: " + PORT);
});