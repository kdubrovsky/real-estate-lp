// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import imagemin from 'gulp-imagemin';                      // https://www.npmjs.com/package/gulp-imagemin
import newer from 'gulp-newer';                            // cheking are the files new
import webp from 'gulp-webp';                              // webp converter

// ------------ params
let plumberImgSettings = {
    errorHandler: notify.onError(err => ({
        title: 'IMG',
        message: err.message
    }))
};

// ------------ Images processing pipe
const img = () => {
    return gulp.src(path.img.src)
        .pipe(plumber(plumberImgSettings))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.img.dest))
        .pipe(gulp.src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(plugins.imagemin))
        .pipe(gulp.dest(path.img.dest))
};

export default img; 