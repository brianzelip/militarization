var gulp     = require('gulp');
var server   = require('gulp-webserver');

// serve this to the browser via `$ gulp serve`
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
