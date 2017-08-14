/**
 * HTML routes dictate end points of visitors' clicks
 * include the "path" package to retrieve file locs 
 */

var path = require("path");

/** 
 * Routes:
 * GET requests mean a client is asking for info/page
 * these functions send path to that info 
 */

module.exports = function(app){
// app is the express server

    //console.log(__dirname);

    app.get("/survey", function(req, res){
    // if a user asks for "this" path

        res.sendFile(path.join(__dirname, "../public/survey.html"));        
        // send back the HTML page with the survey
    });
    
    app.use(function(req, res){
    // by default
        
        //console.log(path.join(__dirname, "/ ../public/home.html"));
        res.sendFile(path.join(__dirname, "../public/home.html"));
        // send back the Home page by default
    });
};