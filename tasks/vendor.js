'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    libs = [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/lodash/lodash.js',
        './bower_components/picturefill/dist/picturefill.js'
    ];

gulp.task('vendor', ['modernizr'], function () {
    // create external libraries
    gulp.src(libs)
        // concat
        .pipe(concat('libs.js'))
        .on('error', function (err) {
            console.log(err);
        })
        // uglify
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err);
        })
        // destination directory
        .pipe(gulp.dest('./public/js'));
});

exports.libs = libs;