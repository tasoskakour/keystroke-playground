// BASE SETUP
// ======================================
// CALL THE PACKAGES 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');


const http = require('http'); // afto dn kserw gt ??


// APP CONFIGURATION ==================
// ====================================
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true })); // edw eixe false
app.use(bodyParser.json());


// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
Authorization');
    next();
});

// log all requests to the console
app.use(morgan('dev'));
// connect to our database (hosted locally)
// mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// set static files location
// used for requests that our frontend will make
//app.use(express.static(__dirname + '/public'));  afto eixa egw
app.use(express.static(path.join(__dirname, 'dist')));




// Get our API routes
var apiRoutes = require('./server/routes/api')(app, express);
app.use('/api', apiRoutes);



// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    //res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// START THE SERVER
// ====================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);


/**
 * Get port from environment and store in Express.
 */
//const port = process.env.PORT || '3000';
//app.set('port', port);

/**
 * Create HTTP server. afto dn to eixa egw
 */
//const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));


