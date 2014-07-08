'use strict';
var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(compass({
            css: './public/css',
            sass: './src/scss'
        }))
        .on('error', function (err){
            console.log(err);
        })
        .pipe(gulp.dest('./public/css'));
});