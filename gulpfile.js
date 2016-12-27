var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    minify = require('gulp-minify'),
    sass = require('gulp-sass'),
    gulpIgnore = require('gulp-ignore');

gulp.task('stylus', function() {
    return gulp.src([
        'resources/assets/stylus/*.styl',
    ])
    .pipe(concat('build.styl'))
    .pipe(stylus())
    .pipe(gulp.dest('public/css'))
});

gulp.task('css', ['stylus'], function() {
    return gulp.src([
        ''
    ])
    .pipe(cssmin())
    .pipe(gulpIgnore('*.min'))
    .pipe(concat('build.css'))
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', ['css'], function() {
    gulp.watch('resources/assets/stylus/**/*.styl', ['css']);
});
