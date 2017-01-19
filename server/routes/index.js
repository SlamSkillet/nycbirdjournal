var express = require('express');
var router = express.Router();
var path = require('path');

// Get Homepage
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../../client/views', 'index.html'));
});

router.get('/species', function(req, res){
	res.sendFile(path.join(__dirname, '../../client/views', 'species.html'));
});

module.exports = router;