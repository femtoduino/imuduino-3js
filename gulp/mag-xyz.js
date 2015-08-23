var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rev = require('gulp-rev'),
    buffer = require('gulp-buffer'),
    revReplace = require('gulp-rev-replace')

gulp.task('mag-xyz-app', [], function() {
    return browserify('client/mag-xyz.js')
      .bundle()
      .pipe(source('mag-xyz.js'))
          .pipe(buffer())
          .pipe(rev())
      .pipe(gulp.dest('public'))
          .pipe(rev.manifest('mag-xyz-manifest.json'))
          .pipe(gulp.dest('public'))
})

gulp.task('mag-xyz', ['mag-xyz-app'], function() {
  var manifest = gulp.src('./public/mag-xyz-manifest.json')

  return gulp.src('./client/mag-xyz.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('public'))
})
