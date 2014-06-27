'use strict';
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    libs = require('./vendor').libs,
    entries = ['./src/scripts/app.js'];

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