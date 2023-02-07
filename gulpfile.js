// ------------ connecting gulp
import gulp from 'gulp'

// ------------ config import
import path from './config/path.js'
import plugins from './config/plugins.js'


// ------------ connecting plugins
import browserSync from 'browser-sync'       // browser live reload


// ------------ importing tasks
import clear from './tasks/clear.js'
// import css from './tasks/css.js'
import font from './tasks/font.js'
import pug from './tasks/pug.js'
import scss from './tasks/scss.js'
import js from './tasks/js.js'
import img from './tasks/img.js'




// ------------ server task
const server = () => {
    browserSync.init(plugins.browser);
};


// ------------ watching tasks
const watcher = () => {
    gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);  // watching Pug
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);  // watching CSS
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);  // watching JS
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);  // watching images
    gulp.watch(path.font.watch, font).on('all', browserSync.reload);  // watching fonts
};


// ------------ granular tasks
export { clear };
// export { css }
export { font };
export { pug };
export { scss };
export { js };
export { img };
export { watcher };


// ------------ builds
const build = gulp.series(
    clear,
    gulp.parallel(pug, scss, js, img, font)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)  //
);

export default plugins.isProd
    ? build
    : dev; 