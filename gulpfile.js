var gulp = require('gulp');
var inject = require('gulp-inject');

/* For Less Compilation */
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {

});

gulp.task('index', function() {
    var target = gulp.src('./app/index.html');

    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['./app/*.js', './app/components/**/*.js', './app/dist/**/*.css'], { read: false }, { relative: true });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app'));
});


gulp.task('less', function() {
    return gulp.src('./app/components/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./app/dist/css'));
});