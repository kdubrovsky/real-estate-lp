// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins
import plumber from 'gulp-plumber';                        // errors catcher                       
import notify from 'gulp-notify';                          // notifications
import autoprefixer from 'gulp-autoprefixer'               // css autoprefixing
import csso from 'gulp-csso';                              // css minify
import rename from 'gulp-rename';                          // file renaming
import size from 'gulp-size';                              // size measuring
import shorthand from 'gulp-shorthand';                    // make shorthands for css props
import groupqueries from 'gulp-group-css-media-queries';   // group @media
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpcss from 'gulp-webp-css';                       // webp for css

const sass = gulpSass(dartSass);

// ------------ params
let plumberSCSSSettings = {
    errorHandler: notify.onError(err => ({
        title: 'SCSS',
        message: err.message
    }))
};


// ------------ CSS processing pipe
const scss = () => {
    return gulp.src(path.scss.src, { sourcemaps: plugins.isDev })
        .pipe(plumber(plumberSCSSSettings))
        .pipe(sass())
        .pipe(webpcss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupqueries())
        .pipe(size(plugins.messages.sizeBefore))
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: plugins.isDev }))
        .pipe(rename(plugins.css.minSuffix))
        .pipe(csso())
        .pipe(size(plugins.messages.sizeAfter))
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: plugins.isDev }))
};

export default scss;