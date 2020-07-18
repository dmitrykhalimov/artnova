"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var del = require("del");
var include = require("posthtml-include");
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var purgecss = require('gulp-purgecss');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;


gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    //.pipe(csso())
    .pipe(rename("style.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 1}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img-optimized"));
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img-optimized"));
})

gulp.task("sprite", function() {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
})

gulp.task("html", function () {
  return gulp.src("source/*.html")
    /*.pipe(posthtml()) */
    /*.pipe(htmlmin({ collapseWhitespace: true }))*/
    .pipe(gulp.dest("build"));
})

gulp.task("js", function () {
  return gulp.src("source/js/**", {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico",
    "source/*.php",
    "source/phpmailer/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
})

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "sprite",
  "html"
));


gulp.task('purgecss', () => {
    return gulp.src('build/css/*.css')
        .pipe(purgecss({
            content: ['build/*.html']
        }))
        .pipe(gulp.dest('build/css2'))
})

gulp.task("compress", function () {
  return pipeline(
        gulp.src("sourse/js/*.js"),
        uglify(),
        gulp.dest("build/js")
  );
});

gulp.task("start", gulp.series("build", "server"));
