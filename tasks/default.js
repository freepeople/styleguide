'use strict';
var gulp = require('gulp');
gulp.task(
    'default', ['compass', 'sprites', 'browserify', 'vendor', 'livereload'],
    function() {
        // execute watchers
        gulp.watch('src/scss/**/*.scss', ['compass']);
        gulp.watch('src/scripts/**/*.js', ['browserify']);
    }
);