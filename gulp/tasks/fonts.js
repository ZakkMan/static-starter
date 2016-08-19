'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import fontgen from 'gulp-fontgen'

gulp.task('fonts', () => {
  return gulp.src('./src/assets/fonts/*')
    .pipe(fontgen({
      dest: './public/assets/fonts'
    }))
    .pipe(gulp.dest('./public/assets/fonts'))
    .pipe(browserSync.stream())
});
