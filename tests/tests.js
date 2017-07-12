var expect = require("chai").expect;
var request =require("request");


var fs = require('fs');

describe(
    "deployed application", function()  {
        it("should return result of searching in local file system", function(done){
            request("http://localhost:8080?search=item", function(error, response, body){
                if (error) {
                     done(error);
                     return;
                }

                expect(body).to.have.string("file1.txt");
                done();
            });
        })
    }
)