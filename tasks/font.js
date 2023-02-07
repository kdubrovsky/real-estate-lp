// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import newer from 'gulp-newer';                            // cheking are the files new
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';


// ------------ params
let plumberFontSettings = {
    errorHandler: notify.onError(err => ({
        title: 'Font',
        message: err.message
    }))
};

// ------------ Font processing pipe
const font = () => {
    return gulp.src(path.font.src)
        .pipe(plumber(plumberFontSettings))
        .pipe(newer(path.font.dest))
        .pipe(fonter(plugins.fonter))
        .pipe(gulp.dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.font.dest));
};

export default font; 