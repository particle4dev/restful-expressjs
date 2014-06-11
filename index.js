var express = require('express');
var mongoose = require('mongoose');
var app = express();
var server = null;
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/blog');
var PostSchema = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , date      : Date
});
var PostModel = mongoose.model('posts', PostSchema)


app.get('/wines', function(req, res) {
    PostModel.findOne({}, function (err, post) {
        if (err) 
            console.error(err);
        res.send(post);
    });
});

exports.listen = function(port){
    server = app.listen(port);
    console.log('Listening on port ' + port + '...');
};
exports.close = function (callback) {
    if(server)
        server.close();
    console.log('Close server ...');
};