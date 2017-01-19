var mongoose = require('mongoose');

module.exports = mongoose.model('BirdEntry', {
  username: String,
  date: String,
  species: String,
  entry: String
});

