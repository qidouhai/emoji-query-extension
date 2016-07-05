var name = require('./package.json').name;

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('cp:chrome',function(){
  return gulp.src('shells/chrome/*')
    .pipe(gulp.dest('chrome_ctx'));
});

gulp.task('cp:dist',function(){
  return gulp.src('dist/*')
    .pipe(gulp.dest('chrome_ctx/dist'));
});

gulp.task('cp:html',function(){
  return gulp.src('app/index.html')
    .pipe(rename('popup.html'))
    .pipe(gulp.dest('chrome_ctx'));
});

gulp.task('default',[
  'cp:chrome',
  'cp:dist',
  'cp:html'
  // 'background'
]);
