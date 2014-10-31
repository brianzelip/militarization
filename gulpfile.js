var gulp     = require('gulp');
var server   = require('gulp-webserver');
var rename   = require('gulp-rename');
var md       = require('gulp-remarkable');

// build markdown files into html
gulp.task('md', function() {
  gulp.src('./*.md')
    .pipe(md())
    .pipe(rename(function (path) {
      path.extname = '.html'
    }))
    .pipe(gulp.dest('./'));
});

// serve this to the browser via `$ gulp serve`
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
