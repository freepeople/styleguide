'use strict';
var gulp = require('gulp'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    libs = require('./vendor').libs;

gulp.task('watch', function() {
    var bundleStream = watchify('./src/scripts/app.js');
    // Run the first time
    // with externals
    bundleStream
        .external(libs)
        .bundle()
        .pipe(source('app.js'))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/js'));

    // Runs per update
    // no need for externals
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