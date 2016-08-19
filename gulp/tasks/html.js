'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('html', () => {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('public'))
})
