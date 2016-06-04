var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rev = require('gulp-rev'),
    buffer = require('gulp-buffer'),
    revReplace = require('gulp-rev-replace')

gulp.task('sim-app', [], function() {
    return browserify('client/sim.js')
      .bundle()
      .pipe(source('sim.js'))
          .pipe(buffer())
          .pipe(rev())
      .pipe(gulp.dest('public'))
          .pipe(rev.manifest('sim-manifest.json'))
          .pipe(gulp.dest('public'))
})

gulp.task('sim', ['sim-app'], function() {
  var manifest = gulp.src('./public/sim-manifest.json')

  return gulp.src('./client/sim.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('public'))
})
