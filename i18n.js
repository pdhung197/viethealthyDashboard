const isDev = process.env.NODE_ENV !== 'production';
const NextI18Next = require('next-i18next').default;

const nextConfigModule = require('./next.config');

let nextConfig;
if (typeof nextConfigModule === 'function') {
    nextConfig = nextConfigModule(isDev ? PHASE_DEVELOPMENT_SERVER : PHASE_PRODUCTION_SERVER, {});
} else {
    nextConfig = nextConfigModule;
}

const { publicRuntimeConfig } = nextConfig

const { localeSubpaths } = publicRuntimeConfig;

const localeSubpathVariations = {
    none: {},
    foreign: {
        en: 'en',
    },
    all: {
        vi: 'vi',
        en: 'en',
    },
}

module.exports = new NextI18Next({
    defaultLanguage: 'vi',
    otherLanguages: ['en'],
    localeSubpaths: localeSubpathVariations[localeSubpaths],
})