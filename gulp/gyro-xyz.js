var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rev = require('gulp-rev'),
    buffer = require('gulp-buffer'),
    revReplace = require('gulp-rev-replace')

gulp.task('gyro-xyz-app', [], function() {
    return browserify('client/gyro-xyz.js')
      .bundle()
      .pipe(source('gyro-xyz.js'))
          .pipe(buffer())
          .pipe(rev())
      .pipe(gulp.dest('public'))
          .pipe(rev.manifest('gyro-xyz-manifest.json'))
          .pipe(gulp.dest('public'))
})

gulp.task('gyro-xyz', ['gyro-xyz-app'], function() {
  var manifest = gulp.src('./public/gyro-xyz-manifest.json')

  return gulp.src('./client/gyro-xyz.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('public'))
})
