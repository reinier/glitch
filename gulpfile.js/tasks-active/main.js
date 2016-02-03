var gulp = require('gulp');

// `gulp`
gulp.task('default', ['init','watch','connect']);
gulp.task('init', ['images','javascript','styles','templates']);

// `gulp publish`
// Publishes to github pages
gulp.task('publish', ['clean:dist', 'dist', 'deploy']);
gulp.task('dist', ['images:dist','javascript:dist','styles:dist','templates:dist']);
