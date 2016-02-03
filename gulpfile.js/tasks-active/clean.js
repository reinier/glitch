var gulp      = require('gulp');
var config    = require('../config').clean;
var clean     = require('gulp-clean');

gulp.task('clean:dist', function () {
  return gulp.src(config.dist, {read: false})
    .pipe(clean());
});
