var express = require('express');
var dependencyResolver = require("./src/dependencyResolver")
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    var fileSearch = dependencyResolver.fileSearch();
    var model = fileSearch.search({});
    res.render("index", model);
})

app.listen(8080);