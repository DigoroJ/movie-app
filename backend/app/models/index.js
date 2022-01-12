const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.movies_Url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.movies = require("./movies.model")(mongoose);

module.exports = db;