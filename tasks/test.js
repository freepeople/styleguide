'use strict';

var gulp = require('gulp'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    browserify = require('browserify'),
    concat = require('gulp-concat');

gulp.task('test', ['buildspecs'], function () {
    return gulp
        .src('test/*.html')
        .pipe(mochaPhantomJS({reporter: 'spec'}));
});