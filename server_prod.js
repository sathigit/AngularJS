var http = require('http'),
    express = require('express'),
    app = express(http),
    socket = require('socket.io')(http),
    path = require('path');

// Initiallizing configurations
var PORT = 8080;

// import modules
var routesModule = require('./server/routes.js'),
    routes = new routesModule();

// Define static path to render files
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// start the http connection
app.listen(PORT, function() {
    console.log('Express server started at PORT : ' + PORT);
});

socket.on('connection', function(connection) {
    console.log('New socket connection established');
});

// define APIs for routes
app.get(['/', '/home', '/books', '/programs', '/questions'], function(req, res) {
    res.render('src/index.html');
});

app.get('/getData', routes.getData);

app.get('/fileupload', function() {
    console.log('uploading file');
})