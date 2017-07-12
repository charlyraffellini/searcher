module.exports = function(repository){
    this.search = function(query){
        var files = repository.getFiles();
        return {files: files};
    }
};