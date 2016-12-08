require('shelljs/global');
const path = require('path');
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

gulp.task('build', () => {
  rm('-rf', 'dist');
  return gulp.src([
    'src/**/*',
    '!src/database*',
    'package.json'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('installDeps', done => {
  cd('dist');
  exec('npm i --production');
  done();
});

gulp.task('release', gulp.series('build', 'installDeps'));

gulp.task('default', gulp.parallel('serve', 'watch'));
