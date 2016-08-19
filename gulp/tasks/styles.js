'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import uncss from 'gulp-uncss'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('styles', () => {
  return gulp.src("./src/assets/styles/main.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie 8',
        'ie 9',
        'android 2.3',
        'android 4',
        'opera 12'
      ]
    }))
    .pipe(cleanCSS({
      advanced: true,
      mediaMerging: true,
      rebase: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/styles'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('parker', function() {
  return gulp.src('./public/assets/main.css')
    .pipe(parker())
})
