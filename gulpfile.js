var gulp = require('gulp')
var less = require('gulp-less')
var paths = {
  less: ['./less/*.less']
}

gulp.task('less', function () { 
  return gulp.src(paths.less)   
  .pipe(less()) 
  .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() { 
  gulp.watch(paths.less, ['less'])
})

gulp.task('default', ['less', 'watch']);