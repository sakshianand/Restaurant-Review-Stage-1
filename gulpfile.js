var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}
var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
gulp.watch("css/*.css").on('change', browserSync.reload);
gulp.watch("*.html").on('change', browserSync.reload);
 browserSync.stream();