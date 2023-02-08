import path from './path.js';

const isProd = process.argv.includes('--production');  //check flag
const isDev = !isProd;

export default {

    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    pug: {
        pretty: true
    },

    messages: {

        sizeAfter: {
            title: 'After compression — '
        },

        sizeBefore: {
            title: 'Before compression — '
        }

    },

    browser: {
        server: {
            baseDir: path.root
        }
    },

    css: {
        minSuffix: {
            suffix: '.min'
        }
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    }
}
