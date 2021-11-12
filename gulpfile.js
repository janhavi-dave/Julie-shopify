const gulp = require('gulp');
const themkit = require('@shopify/themekit');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/global.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets'))
});