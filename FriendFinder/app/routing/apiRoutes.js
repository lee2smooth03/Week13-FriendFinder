/**
 * ===============================================================================
 * We are linking our routes to a the data sources that contains all friends
 * This data sources holds an array of information on available friends
 * ===============================================================================
 */

var friends = require("../data/friends"); //steps into the data folder for friends

/**
 * ===============================================================================
 * Routes
 * ===============================================================================
 */

module.exports = function(app){
/**
 * this module returns a function that makes server requests
 */

    app.get("/api/friends", function(req, res){
    /**
     * if someone makes the request for /api/friends
     * send back a json object of the available list of people
     */
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        //sending an object to the freinds array .push
        
    });
};