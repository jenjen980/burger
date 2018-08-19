// Import MySQL connection.
var connection = require("../config/connection.js");

//ORM is the Object Relational Mapper

var orm = {
    selectAll: function(cb){
        //var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query("SELECT * FROM burgers", function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(burger_name, cb){
        connection.query("INSERT INTO burgers SET ?",{burger_name:burger_name, devoured:false,}, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },


    updateOne: function(burgerID, cb){

        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
