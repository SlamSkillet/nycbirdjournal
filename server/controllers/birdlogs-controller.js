// pull in Mongoose model
var BirdEntry = require('../models/birdlog');

//forming REST API
module.exports.create = function (req, res) {
  var birdlog = new BirdEntry(req.body);

  // saves Meetup model to MongoDB
  birdlog.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  BirdEntry.find({}).sort({_id:-1}).exec(function(err, results) {
    res.json(results);
  });
  
}

module.exports.delete = function (req, res) {

	BirdEntry.remove({ _id : req.body._id }, function(err, callback){
		res.sendStatus(200);
	});
}