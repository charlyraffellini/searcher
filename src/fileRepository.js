var fs = require("fs");

module.exports = function(directory){
    this.getFiles = function (){
        return fs.readdirSync(directory);
    }
}
