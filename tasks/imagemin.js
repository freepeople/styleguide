'use strict';
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush');

gulp.task('imagemin', function () {
    gulp.src('./public/images/*.png')
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/images'));
});