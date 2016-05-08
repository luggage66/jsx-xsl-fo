const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

const paths = {
    src: 'src/**/*.{js,jsx}'
};

gulp.task('default', () => {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    return gulp.watch(paths.src, ['default']);
});
