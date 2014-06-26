'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    glob = require('glob'),
    libs = require('./vendor').libs;
    
gulp.task('browserify', function () {
    // public scripts
    glob.sync('./src/scripts/*.js').forEach(function (file) {
        var start = file.lastIndexOf('/') + 1,
            output_file = file.substr(start);
        var bundleStream = browserify();
        libs.forEach(function (file) {
            bundleStream.external(file);
        });
        bundleStream
            .add(file)
            .bundle({debug: true})
            .pipe(source(output_file))
            .on('error', function (err) {
                console.log(err);
            })
            // destination directory
            .pipe(gulp.dest('./public/js'));
    });
});