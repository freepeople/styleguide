'use strict';
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('livereload', function () {
    var server = livereload();
    gulp.watch(['./public/**/*'])
        .on('change', function(file) {
            server.changed(file.path);
        })
        .on('error', function (err) {
            console.log(err);
        });
});