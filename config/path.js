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

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/css'
    },


    img: {
        src: pathSrc + '/img/*.{jpg,png,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{jpg,png,jpeg,gif,svg}',
        dest: pathDest + '/img'
    },

    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/font'
    },

    svg: {
        src: pathSrc + '/icons/*.svg',
        watch: pathSrc + '/icons/**/*.svg',
        dest: pathDest + '/icons'
    }
} 