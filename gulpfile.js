var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var prefixer = require('autoprefixer');
var runSequence = require('run-sequence');

var config = {
    nodeDir: 'node_modules',
    publicDir: 'dist',
    scssDir: 'scss'
};

gulp.task('scss', function() {
    return gulp.src(config.scssDir + '/karma.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
        "includePaths": [
            config.nodeDir
        ]
    }))
    .pipe($.postcss([prefixer({browsers: ['last 1 version']})]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.publicDir));
});

gulp.task('min', function () {
  return gulp.src(config.publicDir + '/karma.css')
    .pipe($.cssmin())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.publicDir))
    .pipe($.livereload());
});

gulp.task('default', function(cb) {
    runSequence('scss', 'min', cb);
});

gulp.task('watch', ['default'], function (){
    $.livereload.listen();
    gulp.watch(
        [
            config.scssDir + '/*.scss',
            config.scssDir + '/**/*.scss'
        ],
        ['default']);
});
