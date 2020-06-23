const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

/* -------------------------------------------------------------- GLOBALS */

const babelDir = './src/javascript/**/*.js';
const fontDir = './src/fonts/**/*.{woff,woff2}';
const imageDir = './src/images/**/*.{png,ico,gif,jpg,svg,xml}';
const sassDir = './src/stylesheets/**/*.scss';
const bootstrapJsFiles = './node_modules/bootstrap/dist/js/**/*.js';

const destDir = './public/';
const destBabelDir = `${destDir}javascript`;
const destFontDir = `${destDir}fonts`;
const destImageDir = `${destDir}images`;
const destSassDir = `${destDir}stylesheets`;

/* ---------------------------------------------------------------- CLEAN */

gulp.task('clean', () => gulp
  .src([destDir], { read: false, allowEmpty: true })
  .pipe(clean()));

/* --------------------------------------------------------------- ASSETS */

gulp.task('sass', () => gulp
  .src([sassDir])
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'compressed',
    indentedSyntax: false,
  }).on('error', sass.logError))
  .pipe(gulp.dest(destSassDir)));

gulp.task('babel', () => gulp
  .src([babelDir])
  .pipe(babel({
    presets: ['@babel/env'],
  }))
  .pipe(gulp.dest(destBabelDir)));

gulp.task('copy-fonts', () => gulp
  .src([fontDir])
  .pipe(gulp.dest(destFontDir)));

gulp.task('copy-images', () => gulp
  .src([imageDir])
  .pipe(gulp.dest(destImageDir)));

gulp.task('copy-scripts', () => gulp
  .src([
    bootstrapJsFiles,
    './node_modules/jquery/dist/**/*.js',
  ])
  .pipe(gulp.dest(destBabelDir)));

/* ---------------------------------------------------------- BUILD TASKS */

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass', 'babel'),
  gulp.parallel('copy-fonts', 'copy-images', 'copy-scripts'),
));

gulp.task('default', gulp.series('build'));
