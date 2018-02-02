var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var runSequence = require('run-sequence');

// postcss
var autoprefixer = require('autoprefixer');
var discardempty = require('postcss-discard-empty');
var discardcomments = require('postcss-discard-comments');

var config = {
    publicDir: 'dist',
    scssDir: 'scss',
    autoprefixer: {
        "cascade": false
    },
    sass: {
        "includePaths": [
            'node_modules'
        ]
    },
    cssmin: {}
};

gulp.task('scss', function() {
    return gulp.src(config.scssDir + '/karma.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.sass))
    .pipe($.postcss([
        discardcomments(),
        discardempty(),
        autoprefixer(config.autoprefixer)
    ]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.publicDir));
});

gulp.task('min', function () {
  return gulp.src(config.publicDir + '/karma.css')
    .pipe($.cssmin(config.cssmin))
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
