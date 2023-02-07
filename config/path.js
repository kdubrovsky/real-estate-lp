const pathSrc = './source';
const pathDest = './public';


export default {

    root: pathDest,

    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css',
        targetFile: 'main.css'
    },

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/css',
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js',
    },

    img: {
        src: pathSrc + '/img/*.{jpg,png,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{jpg,png,jpeg,gif,svg}',
        dest: pathDest + '/img',
    },

    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/font',
    }
} 