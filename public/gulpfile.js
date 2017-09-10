var gulp = require('gulp'),
    inject = require('gulp-inject'),
    less = require('gulp-less'),
    htmlclean = require('gulp-htmlclean'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    fs = require('fs');

    var version = null;
    
gulp.task('default', function() {

});

gulp.task('inject', ['less'], function() {
    var target = gulp.src('./src/index.html');

    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['./src/routes.js', './src/**/*.js', './src/**/**/*.js', './src/components/**/*.css'], { read: false }, {relative: true});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});

gulp.task('inject-prod', ['less', 'build', 'js-prod','css-prod'], function(){
    var target = gulp.src('./dist/' + version + '/index.html');

    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['./dist/' + version + '/js/bundle.js', './dist/' + version + '/css/style.css'], { read: false }, {relative: true});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist/' + version));
});


gulp.task('less', function() {
    return gulp.src('./src/components/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/components'));
});

gulp.task('build', function(){
    var json = JSON.parse(fs.readFileSync('../package.json'));
    version = json["version"];
    console.log(version);

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'+ version));

});

// HTML processing
gulp.task('html', function() {

    var json = JSON.parse(fs.readFileSync('../package.json'));
    version = json["version"];
  
    return gulp.src('./src/index.html')
        //.pipe(htmlclean())
        .pipe(replace('{{#BUILD_NUMBER}}', version))
        .pipe(gulp.dest('./dist/'+ version));

});



gulp.task('js-prod', function() {
    return gulp.src(['./src/routes.js', './src/**/*.js', './src/**/**/*.js'])
	    .pipe(plumber())
			.pipe(concat('bundle.js', {newLine: ';'}))
			//.pipe(ngAnnotate({add: true}))
	    .pipe(plumber.stop())
        .pipe(gulp.dest('./dist/' + version + '/js'));
});

gulp.task('css-prod', function() {
    return gulp.src('./src/components/**/*.css')
	    .pipe(plumber())
			.pipe(concat('style.css', {newLine: ' '}))
			//.pipe(ngAnnotate({add: true}))
	    .pipe(plumber.stop())
        .pipe(gulp.dest('./dist/' + version + '/css'));
});