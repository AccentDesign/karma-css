var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var runSequence = require('run-sequence');
var autoprefixer = require('autoprefixer');

var config = {
    publicDir: 'dist',
    scssDir: 'scss',
    autoprefixer: {
        browsers: [
            'Chrome >= 35',
            'Firefox >= 38',
            'Edge >= 12',
            'Explorer >= 10',
            'iOS >= 8',
            'Safari >= 8',
            'Android 2.3',
            'Android >= 4',
            'Opera >= 12'
        ],
        "cascade": false
    },
    sass: {
        "includePaths": [
            'node_modules'
        ]
    },
    csso: {}
};

gulp.task('scss', function() {
    return gulp.src(config.scssDir + '/karma.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.sass))
    .pipe($.postcss([
        autoprefixer(config.autoprefixer)
    ]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.publicDir));
});

gulp.task('min', function () {
  return gulp.src(config.publicDir + '/karma.css')
    .pipe($.csso(config.csso))
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
