// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';

// ------------ connecting plugins

import plumber from 'gulp-plumber';                    // errors catcher
import pugs from 'gulp-pug';                           // pug processing
import notify from 'gulp-notify';                      // notifications
import typo from 'gulp-typograf'
// import webphtml from 'gulp-webp-html';                 // webp html support


// ------------ params
let plumberPUGSettings = {
    errorHandler: notify.onError(err => ({
        title: 'PUG',
        message: err.message
    }))
};

// ------------ pug processing pipe
const pug = () => {
    return gulp.src(path.pug.src)
        .pipe(plumber(plumberPUGSettings))
        .pipe(pugs(plugins.pug))
        .pipe(typo({ locale: ['en-US'] }))
        // .pipe(webphtml())
        .pipe(gulp.dest(path.pug.dest))
};

export default pug;