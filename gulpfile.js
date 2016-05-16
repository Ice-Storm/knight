var gulp         = require("gulp");
var browserify   = require("browserify");
var source       = require("vinyl-source-stream");
var babelify     = require("babelify");
var uglify       = require("gulp-uglify");
var rename       = require("gulp-rename");
var concat       = require("gulp-concat");                          
var minifyCss    = require("gulp-minify-css");
var streamify    = require('gulp-streamify');  
var babel        = require("gulp-babel");
var environments = require('gulp-environments');

var production = environments.production;

function compiler(parm) {
  if (parm && parm.path && parm.rename) {
    parm.dest = parm.dest ? parm.dest : './dist';

    browserify(parm.path)
      .transform('babelify', { presets: ['react'] })
      .bundle()
      .pipe(source(parm.path))
      .pipe(streamify(uglify()))
      .pipe(rename(parm.rename))
      .pipe(gulp.dest(parm.dest));
  }
}

gulp.task('compress', function () {
  gulp.src('./css/*.css')
    .pipe(concat('megBoard.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('build', ['compress'], function () {
  compiler({
    path: './app.js',
    rename: 'megBoard.min.js'
  });
})



