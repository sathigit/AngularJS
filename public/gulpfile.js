var gulp = require('gulp');
var inject = require('gulp-inject');

/* For Less Compilation */
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {

});

gulp.task('index', ['less'], function() {
    var target = gulp.src('./src/index.html');

    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['./src/components/**/*.js', './src/components/**/*.css'], { read: false }, { relative: true });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});


gulp.task('less', function() {
    return gulp.src('./src/components/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/components'));
});