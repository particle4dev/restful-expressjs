var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');

gulp.task('lint', function () {
    return gulp.src('./src/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function() {
    gulp.src(['./test/*.js'], {
        read: false
    }).pipe(mocha({
        reporter: 'spec',
        globals: {
            should: require('should')
        }
    })).on('error', function(err) {
        if (!/tests? failed/.test(err.stack)) {
            console.log(err.stack);
        }
    });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([
        './index.js',
        './src/*.js',
        './test/*.js'
    ], ['lint', 'mocha']);
});

// Default Task
gulp.task('default', ['lint', 'mocha', 'watch']);