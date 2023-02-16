// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import svgSprite from 'gulp-svg-sprite';


// ------------ params
let plumberSvgSettings = {
    errorHandler: notify.onError(err => ({
        title: 'SVG',
        message: err.message
    }))
};

// ------------ Images processing pipe
const svg = () => {
    return gulp.src(path.svg.src)
        .pipe(plumber(plumberSvgSettings))
        .pipe(svgSprite(plugins.svg))
        .pipe(gulp.dest(path.svg.dest))
};

export default svg; 