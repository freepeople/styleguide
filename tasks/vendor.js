'use strict';
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    libs = ['jquery', 'lodash', 'picturefill'];

gulp.task('vendor', ['modernizr'], function() {
    // create external libraries
    var bundleStream = browserify();
    bundleStream
        .require(libs)
        .bundle({debug: true})
        .pipe(source('vendor-bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/js'));
});

module.exports.libs = libs;
