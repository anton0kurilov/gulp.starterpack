var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    uglify = require('gulp-uglifyjs'),
    gutil = require('gulp-util'),
    ftp = require('vinyl-ftp');

var urlscss = 'app/scss/**/*.scss',
    urlcss = 'app/css/**/*.css',
    urljs = 'app/js/**/*.js',
    urlfonts = 'app/fonts/**/*',
    urlimg = 'app/img/**/*',
    urlhtml = 'app/*.html';

// SASS
gulp.task('sass', function (done) {
    gulp.src(urlscss)
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(cleancss({
            compatibility: 'ie7'
        }))
        .pipe(gulp.dest('app/css'))
    done();
});

// SCRIPTS
gulp.task('scripts', function (done) {
    gulp.src([
            'app/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
    done();
});

// CLEAN PRODUCTION FOLDER
gulp.task('clean', function (done) {
    del.sync('public_html');
    done();
});

// WATCH
gulp.task('watch', function (done) {
    gulp.watch(urlscss, gulp.series('sass'));
    gulp.watch(urljs, gulp.series('scripts'));
    done();
});

// MOVE 
gulp.task('move', function(done) {
    gulp.src([
        urlhtml,
        urlcss,
        urlimg,
        urljs,
        urlfonts
    ], {
        base: './'
    })
    .pipe(gulp.dest('public_html'));
    done();
});

// BUILD 
gulp.task('build', gulp.series('clean', 'sass', 'scripts', 'move'));

// DEPLOY
gulp.task('deploy', function () {
    var ftpdata = require('./app/config/ftpdata.json');
    var conn = ftp.create({
        host: ftpdata.host,
        user: ftpdata.user,
        password: ftpdata.pass,
        parallel: 10,
        log: gutil.log
    });
    var globs = [
        'public_html/**'
    ];
    return gulp.src(globs, {
            base: '.',
            buffer: false
        })
        .pipe(conn.newer('/'))
        .pipe(conn.dest('/'));

});

// DEFAULT TASK
gulp.task('default', gulp.series('watch'));