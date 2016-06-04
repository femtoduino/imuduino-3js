var gulp = require('gulp')

gulp.task('static', function() {
  return gulp.src('client/index.html')
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['static', 'pyr', 'raw', 'playback', 'accel-xyz', 'gyro-xyz', 'mag-xyz', 'temp-alt', 'sim'])
