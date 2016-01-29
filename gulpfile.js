// Include gulp
var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    replace = require('gulp-replace'),
    uglify = require("gulp-uglify")

// Clean
gulp.task("clean", function () {
    return del(['debug/web.config',
        'debug/*.html',
        'debug/js/*',
        'debug/css/*',
        'debug/images/*'
    ]);
});
// Debug: Copy the html, cache, and web.config
gulp.task("build-html", function () {
    gulp.src(['./*.html', './web.config', './favicon.ico'])
        .pipe(gulp.dest('./debug'));
});
// Deploy: Copy the images
gulp.task("build-images", function () {
    gulp.src('./images/*')
        .pipe(gulp.dest('./debug/images'));
});
// Debug: Copy the JS
gulp.task('build-js', function () {
    gulp.src('./js/*.js')
        .pipe(gulp.dest('./debug/js/'));
});
// Debug: Copy the JS libs
gulp.task('build-jslib', function () {
    gulp.src('./lib/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./debug/lib/bootstrap'));
    gulp.src('./lib/jquery/dist//jquery.js')
        .pipe(gulp.dest('./debug/lib/jquery'));
});
// Debug: Copy the CSS
gulp.task('build-css', function () {
    gulp.src('./css/*.css')
        .pipe(gulp.dest('./debug/css/'));
});
// Debug: Copy the CSS libs
gulp.task('build-csslib', function () {
    gulp.src('./lib/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('./debug/lib/bootstrap'));
});
