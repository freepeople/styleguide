'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    glob = require('glob');

gulp.task('buildspecs', function () {
    var bundleStream = browserify();
    glob.sync('./test/spec/**/*.js').forEach(function (file) {
        bundleStream.add(file);
    });
    bundleStream
        .bundle({debug: true})
        .pipe(source('tests.js'))
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(gulp.dest('./test/bundle'));
});