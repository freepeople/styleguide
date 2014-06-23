var gulp = require('gulp');
gulp.task('build', [
    'compass',
    'sprites',
    'imagemin',
    'vendor',
    'browserify',
    'uglify',
    'test',
    'jsdocs'
]);