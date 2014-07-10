'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var libs = require('./vendor').libs;
var entries = ['./src/scripts/app.js'];


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