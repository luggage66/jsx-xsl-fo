const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const ts = require('gulp-typescript');

const paths = {
    src: 'src/**/*.{ts,tsx}',
    dest: 'dist'
};

const tsProject = ts.createProject("tsconfig.json");

gulp.task('default', () => {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', ['default'], () => {
    return gulp.watch(paths.src, ['default']);
});

gulp.task('clean', () => {
    return del(paths.dist);
});
