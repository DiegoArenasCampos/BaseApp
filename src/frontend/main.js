var express = require('express');
var app = express();

var util = require('gulp-util');

var distDir = '/dist';
var resourcesDir = '/resources';
var sourcesDir = '/sources';
var videosDir = '/resources/videos';

// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load a method category.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');

app.use(distDir, express.static('dist'));
app.use(resourcesDir, express.static('resources'));
app.use(sourcesDir, express.static('site'));
app.use(videosDir, express.static('videos'));

app.get('/', function(req, res) {
    res.sendFile( __dirname + "/site/index.html" );
});

var server = app.listen(8081, function() {
    util.log('The NodeJS server is running...');
});