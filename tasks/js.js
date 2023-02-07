// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import babel from 'gulp-babel';                            // transpiler babel
import webpack from 'webpack-stream';                      // webpack


// ------------ params
let plumberJSSettings = {
    errorHandler: notify.onError(err => ({
        title: 'JS',
        message: err.message
    }))
};

// ------------ JS processing pipe
const js = () => {
    return gulp.src(path.js.src, { sourcemaps: plugins.isDev })
        .pipe(plumber(plumberJSSettings))
        .pipe(babel())
        .pipe(webpack(plugins.webpack))
        .pipe(gulp.dest(path.js.dest, { sourcemaps: plugins.isDev }))
};

export default js; 