var request = require('request'),
assert = require('assert'),
server = require('../index'),
port = 3000;

describe('API CALL UNIT TESTING', function () {
    before(function(){
        server.listen(port);
    });

    // GET /properties
    describe('GET /wines', function () {
        it("should respond with status 200", function (done) {
            request('http://localhost:' + port + '/wines', function (err, resp) {
                assert.equal(resp.statusCode, 200);
                //console.log(resp);
                done();
            });
        });
    });

    after(function(){
        server.close();
    });
});