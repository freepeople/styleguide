'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var libs = require('./vendor').libs;
var entries = ['./src/scripts/app.js'];
var watchify = require('watchify');


gulp.task('browserify', function() {
    var bundleStream = browserify({
        entries: entries
    });
    bundleStream
        .external(libs)
        .bundle()
        .pipe(source('app.js'))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/js'));
});


gulp.task('watchify', function() {
    var bundleStream = watchify('./src/scripts/app.js');
    var firstTime = true;

    // First time run
    // needs to externals
    // may need to revisit this concept later
    if (firstTime) {
        bundleStream.external(libs);
        rebundle();
        firstTime = false;
    }

    function rebundle() {
        bundleStream
            .bundle()
            .pipe(source('app.js'))
            .on('error', function(err) {
                console.log(err);
            })
            .pipe(gulp.dest('./public/js'));
    }

    bundleStream.on('update', rebundle);
    bundleStream.on('log', console.log);

    return rebundle();
});