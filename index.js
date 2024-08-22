var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");


const app = express()

app.use(bodyparser.json() );
app.use(express.static('public'))

app.get("/",(req , res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })

}).listen(3000);

console.log("Listing on the 3000");
