var gulp      = require('gulp');
var gulputil  = require('gulp-util');
var config    = require('../config').cname;

gulp.task('cname:dist', ['clean:dist'], function () {
  return create_file("CNAME", config.cname)
    .pipe(gulp.dest(config.dist))
});

function create_file(filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gulputil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}
