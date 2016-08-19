'use strict'

import gulp         from 'gulp'
import babel        from "gulp-babel"
import browserify   from 'browserify'
import jshint       from 'gulp-jshint'
import plumber      from 'gulp-plumber'
import buffer       from 'vinyl-buffer'
import uglify       from 'gulp-uglify'
import rename       from 'gulp-rename'
import source       from 'vinyl-source-stream'

gulp.task('scripts', () => {
 var b = browserify({
   entries: './src/assets/scripts/main.js',
   debug: true,
   transform: [
     ["babelify", {presets: ["es2015"]}]
   ]
 })

 return b
   .bundle()
   .pipe(source('main.js'))
   .pipe(buffer())
   .pipe(plumber())
   .pipe(uglify().on('error', function(err){ console.log(err) }))
   .pipe(rename('main.min.js'))
   .pipe(gulp.dest('./public/assets/scripts'))
})

gulp.task('lint', () => {
  return gulp.src('./public/assets/scripts/main.js')
    .pipe(jshint())
})
