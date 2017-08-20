var http = require ('http'),
    express = require ('express'),
    app = express(http),
    socket = require ('socket.io')(http),
    path = require('path');

// Initiallizing configurations
var PORT = 8080;

// import modules
var routesModule = require('./server/routes.js'),
    routes = new routesModule();

// Define static path to render files
app.use(express.static(path.join(__dirname, 'app')));

// start the http connection
app.listen(PORT, function () {  
    console.log('Express server started at PORT : ' + PORT);
});

socket.on('connection', function (connection) {
    console.log('New socket connection established');
});

// define APIs for routes
app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/getData', routes.getData);