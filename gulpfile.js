var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = {
    publicDir: 'dist',
    scssDir: 'scss',
    autoprefixer: {
        "browsers": [
            "last 2 versions",
            "IE 9",
            "Safari 8"
        ],
        "cascade": false
    },
    sass: {
        "includePaths": [
            'node_modules'
        ]
    }
};

gulp.task('scss', function() {
    return gulp.src(config.scssDir + '/karma.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.sass))
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe($.sourcemaps.write('.'))
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
