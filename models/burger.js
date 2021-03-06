//Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    //creates the columns and values as arrays
    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        });
    },

    //updates the values
    updateOne: function(burger_id, cb){
        orm.updateOne(burger_id, function(res){
            cb(res);
        });
    }

};


//Export the database functions for the controller (burger_controller.js)
module.exports = burger;
