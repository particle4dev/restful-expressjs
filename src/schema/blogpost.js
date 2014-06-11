var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var BlogPostSchema = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , date      : Date
});
var BlogPostModel = mongoose.model('Product', BlogPostSchema);

// List products
module.exports = {
    get: function(res){
        return BlogPostModel.find(function (err, products) {
            if (!err) {
                return res.send(products);
            } else {
                return console.log(err);
            }
        });
    }
};