const { watch, src, dest, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function css() {
  return src('assets/styles.scss')
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(dest('assets/'))
}

exports.css = css;

exports.default = parallel(css);

watch('assets/styles.scss', series(css));