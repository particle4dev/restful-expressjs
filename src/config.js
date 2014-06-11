//exports an object that contains all configuration keys and values, pretty much like web.config in an Asp.Net 
//web app. Following this line we can think about having a config-debug.js  and a config-release.js.
module.exports = {
  	"db": {
		"mongodb": "mongodb://username:password@dsXXXXX.mongolab.com:45077/databasename"
	},
	"logger": {
		"api": "logs/api.log",
		"exception": "logs/exceptions.log"
	}
};