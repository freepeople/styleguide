'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('uglify', function () {
    gulp.src('./public/js/*')
        .pipe(uglify())
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/js'));
});