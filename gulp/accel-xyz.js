var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rev = require('gulp-rev'),
    buffer = require('gulp-buffer'),
    revReplace = require('gulp-rev-replace')

gulp.task('accel-xyz-app', [], function() {
    return browserify('client/accel-xyz.js')
      .bundle()
      .pipe(source('accel-xyz.js'))
          .pipe(buffer())
          .pipe(rev())
      .pipe(gulp.dest('public'))
          .pipe(rev.manifest('accel-xyz-manifest.json'))
          .pipe(gulp.dest('public'))
})

gulp.task('accel-xyz', ['accel-xyz-app'], function() {
  var manifest = gulp.src('./public/accel-xyz-manifest.json')

  return gulp.src('./client/accel-xyz.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('public'))
})
