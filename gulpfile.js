const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Main
gulp.task('default', ['watch']);

// Compile scss
gulp.task('styles', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

//Watching files for changes
gulp.task('watch', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch('assets/sass/*.css').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
});