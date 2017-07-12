var express = require('express')
var fs = require("fs");
var app = express()


app.get('/', function (req, res) {
    var files = fs.readdirSync("./files");
    res.send(files);
})

app.listen(8080);