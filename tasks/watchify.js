'use strict';
var gulp = require('gulp'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    libs = require('./vendor').libs;


gulp.task('watch', function() {
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