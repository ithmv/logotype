const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(concat('main.css')) 
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream()); 
}

function html() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream()); 
}

function js() {
  return gulp.src('./main.js')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream()); 
}

function img() {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream()); 
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('./src/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./main.js', js);
  gulp.watch('./src/img/**/*.*', img);
}

exports.style = style;
exports.watch = watch;
exports.html = html;
exports.js = js;
exports.img = img;
exports.default = gulp.series(gulp.parallel(style, html, js, img), watch);
