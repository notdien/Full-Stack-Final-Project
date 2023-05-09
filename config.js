// creates an empty js object
var config = {};

// creating empty object as properties of config
config.app = {};
config.server = {};
config.db = {};

config.server.port = 5678;

config.db.name = 'movieDB';
config.db.collection = 'Movie Lists';

module.exports.config;