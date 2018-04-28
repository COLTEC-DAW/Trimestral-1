const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Main
gulp.task('default', ['watch']);

//Watching files for changes
gulp.task('watch', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch('assets/css/*.css').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
});