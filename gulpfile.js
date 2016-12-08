const gulp = require('gulp4');
const developServer = require('gulp-develop-server');

gulp.task('serve', done => {
  developServer.listen({
    path: 'src/index.js'
  });
  done();
});

gulp.task('watch', () => {
  return gulp.watch([
    'src/**/*',
    '!src/database*'
  ], developServer.restart);
});

gulp.task('default', gulp.parallel('serve', 'watch'));
