var express           = require('express');
var router = express.Router();
var bodyParser        = require('body-parser');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var birdlogController = require('./server/controllers/birdlogs-controller');

dotenv.load();

mongoose.connect(process.env.MONGODB_mainURI);
var db = mongoose.connection;

var routes = require('./server/routes/index');

var app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//REST API - have to send a response - don't leave it hangin'!!
app.get('/api/birdlog', birdlogController.list);
app.post('/api/birdlog', birdlogController.create);
app.delete('/api/birdlog', birdlogController.delete);

app.use('/', routes);

app.listen((process.env.PORT || 3000), function() {
  console.log('Server running! It\'s lit!');
})
