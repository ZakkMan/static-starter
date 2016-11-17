'use strict'

import gulp         from 'gulp'
import browserSync  from 'browser-sync'
import runSequence from 'run-sequence'

gulp.task('watch', ['build'], () => {
  browserSync.init({
    notify: true,
    server: {
      baseDir: './public'
    }
  })

  let source = 'src/assets'
  gulp.watch(source + '/styles/**/*', ['styles'])
  gulp.watch(source + '/scripts/**/*', ['scripts', browserSync.reload])
  gulp.watch('src/**/*.html', ['html', browserSync.reload])
  // gulp.watch(source + '/fonts/**/*', ['fonts'])
  gulp.watch(source + '/images/**/*', ['images'])
})
