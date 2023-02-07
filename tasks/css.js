// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import concat from 'gulp-concat';                          // css files concatenation
import cssimport from 'gulp-cssimport';                    // css import support
import autoprefixer from 'gulp-autoprefixer';               // css autoprefixing
import csso from 'gulp-csso';                              // css minify
import rename from 'gulp-rename';                          // file renaming
import size from 'gulp-size';                              // size measuring
import shorthand from 'gulp-shorthand';                    // make shorthands for css props
import groupqueries from 'gulp-group-css-media-queries';   // group @media
import webpcss from 'gulp-webp-css';                       // webp for css


// ------------ params
let plumberCSSSettings = {
    errorHandler: notify.onError(err => ({
        title: 'CSS',
        message: err.message
    }))
}; 


// ------------ CSS processing pipe
const css = () => {
    return gulp.src(path.css.src, { sourcemaps: plugins.isDev })
        .pipe(plumber(plumberCSSSettings))
        .pipe(concat(path.css.targetFile))
        .pipe(cssimport())
        .pipe(webpcss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupqueries())
        .pipe(size(plugins.messages.sizeBefore))
        .pipe(gulp.dest(path.css.dest, { sourcemaps: plugins.isDev }))
        .pipe(rename(plugins.css.minSuffix))
        .pipe(csso())
        .pipe(size(plugins.messages.sizeAfter))
        .pipe(gulp.dest(path.css.dest, { sourcemaps: plugins.isDev }))
};

export default css;