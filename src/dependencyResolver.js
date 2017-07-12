var config = require("./config");
var FileRepository = require('./fileRepository');
var FileSearch = require("./fileSearch");

module.exports = {
    fileSearch: function(){
        var sourceDirectory = config.sourceDir;
        var repo = new FileRepository(sourceDirectory);
        return new FileSearch(repo);
    }
}