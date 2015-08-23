var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rev = require('gulp-rev'),
    buffer = require('gulp-buffer'),
    revReplace = require('gulp-rev-replace')

gulp.task('temp-alt-app', [], function() {
    return browserify('client/temp-alt.js')
      .bundle()
      .pipe(source('temp-alt.js'))
          .pipe(buffer())
          .pipe(rev())
      .pipe(gulp.dest('public'))
          .pipe(rev.manifest('temp-alt-manifest.json'))
          .pipe(gulp.dest('public'))
})

gulp.task('temp-alt', ['temp-alt-app'], function() {
  var manifest = gulp.src('./public/temp-alt-manifest.json')

  return gulp.src('./client/temp-alt.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('public'))
})
