var express = require('express')
var fs = require("fs");
var app = express()

app.set('view engine', 'pug')


app.get('/', function (req, res) {
    var files = fs.readdirSync("./files");
    
    res.render("index", {message: files});
})

app.listen(8080);