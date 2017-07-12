var express = require('express')
var fs = require("fs");
var app = express()

app.set('view engine', 'pug')

var sourceDirectory = "./files";

function getFiles(directory){
    return fs.readdirSync(directory);
}

app.get('/', function (req, res) {
    var files = getFiles(sourceDirectory);
    
    res.render("index", {files: files});
})

app.listen(8080);