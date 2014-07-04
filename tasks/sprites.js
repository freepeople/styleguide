'use strict';
var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function () {
    var spriteData = gulp.src('./src/sprites/*.png').pipe(spritesmith({
        imgName: 'sprites.png',
        imgPath: '/images/sprites.png',
        cssName: '_sprites.scss',
        algorithm: 'binary-tree'
    }));
    spriteData.img.pipe(gulp.dest('./public/images'));
    spriteData.css.pipe(gulp.dest('./src/scss/sprites'));
});