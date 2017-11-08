var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = cssnano = require('gulp-cssnano');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var del = require('del');
var util = require('gulp-util');
var shell = require('gulp-shell');

// Declaration of variables
var DIST_FOLDER = '../main/webapp/resources';
var SITE_FOLDER = DIST_FOLDER + '/site';

gulp.task('default', function(callback) {
    runSequence(
    //'install-dependencies',
    'process-site-index',
    'process-site-pages',
    'process-site-styles',
    'process-site-scripts',
    'process-resources-scripts',
    'process-vendor-styles',
    'process-images',
    'process-videos',
    'process-fonts',
    'watch-site-index',
    'watch-site-pages',
    'watch-site-styles',
    'watch-site-scripts',
    'watch-vendor-styles',
    'watch-resources-scripts',
    function (error) {
        if (error) {
            util.log(error.message);
        } else {
            util.log('BASE APP -> Gulp tasks were executed succesfully!.');
        }
        callback(error);
    });
});

gulp.task('install-dependencies', shell.task([
	'npm install'
]));

gulp.task('process-site-index', function() {
    util.log('BASE APP -> Running process-site-index task...');
    return gulp.src([
            'site/*'
        ])
        .pipe(gulp.dest(DIST_FOLDER))
        .pipe(notify({ message: 'BASE APP -> process-site-index task complete' }));
});

gulp.task('process-site-pages', function() {
    util.log('BASE APP -> Running process-site-pages task...');
    return gulp.src([
            'site/**/*.html'
        ])
        .pipe(gulp.dest(SITE_FOLDER))
        .pipe(notify({ message: 'BASE APP -> process-site-pages task complete' }));
});

gulp.task('process-site-styles', function() {
    util.log('BASE APP -> Running process-site-styles task...');
    return sass('resources/css/app/sass/todomediacion.scss')
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(DIST_FOLDER + '/css'))
        .pipe(rename({suffix: '.min'} ))
        .pipe(cssnano())
        .pipe(gulp.dest(DIST_FOLDER + '/css'))
        .pipe(notify({ message: 'BASE APP -> process-site-styles task completed.' }));
});

gulp.task('process-site-scripts', function() {
    util.log('BASE APP -> Running process-site-scripts task...');
    return gulp.src('site/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest(DIST_FOLDER + '/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(DIST_FOLDER + '/js'))
        .pipe(notify({ message: 'BASE APP -> process-site-scripts task complete' }));
});

gulp.task('process-resources-scripts', function() {
    util.log('BASE APP -> Running process-resources-scripts task...');
    return gulp.src([
            'resources/js/jquery/*.js',
            'resources/js/underscore/*.js',
            'resources/js/lodash/*.js',
            'resources/js/angular/*.js',
            'resources/js/ngStorage/*.js',
            'resources/js/angular-messages/*.js',
            'resources/js/angular-route/*.js',
            'resources/js/angular-simple-logger/*.js',
            'resources/js/angular-google-maps/*.js',
            'resources/js/angular-resource/*.js',
            'resources/js/bootstrap/*.js',
            'resources/js/moment/*.js',
            'resources/js/bootstrap-datetimepicker/*.js',
            'resources/js/fullcalendar/fullcalendar.min.js',
            'resources/js/fullcalendar/gcal.js',
            'resources/js/fullcalendar/lang-all.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(DIST_FOLDER + '/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(DIST_FOLDER + '/js'))
        .pipe(notify({ message: 'BASE APP -> process-resources-scripts task complete' }));
});

gulp.task('process-vendor-styles', function() {
    util.log('BASE APP -> Running process-vendor-styles task...');
    return gulp.src('resources/css/vendor/**/*.css')
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(DIST_FOLDER + '/css'))
        .pipe(rename({suffix: '.min'} ))
        .pipe(cssnano())
        .pipe(gulp.dest(DIST_FOLDER + '/css'))
        .pipe(notify({ message: 'BASE APP -> process-vendor-styles task completed.' }));
});

gulp.task('process-images', function() {
    util.log('BASE APP -> Running process-images task...');
    return gulp.src([
            'resources/images/**/*.{gif,jpg,png,svg}'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/images'));
});

gulp.task('process-videos', function() {
    util.log('BASE APP -> Running process-videos task...');
    return gulp.src([
            'resources/videos/*'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/videos'))
        .pipe(notify({ message: 'BASE APP -> process-videos task complete' }));
});

gulp.task('process-fonts', function() {
    util.log('BASE APP -> Running process-fonts task...');
    return gulp.src([
            'resources/fonts/**/*'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/fonts'));
});

gulp.task('watch-site-index', function() {
    gulp.watch('site/*', ['process-site-index'])
});

gulp.task('watch-site-pages', function() {
    gulp.watch('site/**/*.html', ['process-site-pages'])
});

gulp.task('watch-site-styles', function() {
    gulp.watch('resources/css/app/sass/*.scss', ['process-site-styles'])
});

gulp.task('watch-site-scripts', function() {
    gulp.watch('site/**/*.js', ['process-site-scripts'])
});

gulp.task('watch-vendor-styles', function() {
    gulp.watch('resources/css/vendor/**/*.css', ['process-vendor-styles'])
});

gulp.task('watch-resources-scripts', function() {
    gulp.watch('resources/js/**/*.js', ['process-resources-scripts'])
});