var express = require('express');
var FileRepository = require('./src/fileRepository');
var config = require("./src/config");
var app = express();

app.set('view engine', 'pug');

var sourceDirectory = config.sourceDir;
var repo = new FileRepository(sourceDirectory);

app.get('/', function (req, res) {
    var files = repo.getFiles();
    
    res.render("index", {files: files});
})

app.listen(8080);