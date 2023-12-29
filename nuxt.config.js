import webpack from 'webpack'
import config from './data/siteConfig'

export default {
  mode: 'universal',
  // ------------------------------------
  // HEADERS OF THE PAGE
  // ------------------------------------
  head: {
    title: config.siteTitle,
    titleTemplate: `%s - ${config.siteTitle}`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
      {
        hid: 'description',
        name: 'description',
        content: config.siteDescription,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: config.siteTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: config.siteDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${config.siteUrl}/${config.siteLogo}`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: config.siteTitle,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: config.siteTitle,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${config.siteUrl}/${config.siteLogo}`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: config.siteDescription,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      { rel: 'stylesheet', type: 'text/css', href: '/styles/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/styles/responsive.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/styles/animate.css' },
    ],
    script: [
      // {
      //   src: '/javascript/jquery.min.js',
      //   type: 'text/javascript',
      // },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
        crossorigin: 'anonymous',
        type: 'text/javascript',
      },
      // {
      //   src: '/javascript/bootstrap.min.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      {
        src: '/javascript/jquery.easing.js',
        body: true,
        type: 'text/javascript',
      },
      // {
      //   src: '/javascript/jquery.cookie.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      // {
      //   src: '/javascript/jquery.fitvids.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      {
        src: '/javascript/parallax.js',
        body: true,
        type: 'text/javascript',
      },
      // {
      //   src: '/javascript/jquery.magnific-popup.min.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      // {
      //   src: '/javascript/owl.carousel.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        body: true,
        type: 'text/javascript',
      },
      // {
      //   src: '/javascript/jquery.flexslider-min.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      // {
      //   src: '/javascript/jquery-validate.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      // {
      //   src: '/javascript/jquery-countTo.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      // {
      //   src: '/javascript/jquery-waypoints.js',
      //   body: true,
      //   type: 'text/javascript',
      // },
      {
        src: '/javascript/jquery.themepunch.tools.min.js',
        body: true,
        type: 'text/javascript',
      },
      {
        src: '/javascript/jquery.themepunch.revolution.min.js',
        body: true,
        type: 'text/javascript',
      },
    ],
  },
  // ------------------------------------
  // CUSTOM LOADER
  // ------------------------------------
  loading: '~/components/Loading.vue',
  // ------------------------------------
  // TRANSITION
  // ------------------------------------
  pageTransition: 'page',
  // ------------------------------------
  // GLOBAL CSS
  // ------------------------------------
  css: ['@/assets/styles/style.scss'],
  // ------------------------------------
  // GENERATE
  // ------------------------------------
  generate: {
    minify: {
      removeRedundantAttributes: false,
    },
  },
  // ------------------------------------
  // NUXT.JS DEV-MODULES
  // ------------------------------------
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],
  // ------------------------------------
  // NUXT.JS MODULES
  // ------------------------------------
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/browserconfig',
    'nuxt-imagemin',
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],
  // ------------------------------------
  // i18n OPTIONS
  // ------------------------------------
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-ca',
        file: 'en.js',
      },
      {
        code: 'fr',
        iso: 'fr-ca',
        file: 'fr.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    seo: true,
    baseUrl: config.siteUrl,
  },
  // ------------------------------------
  // PWA OPTIONS
  // ------------------------------------
  pwa: {
    manifest: {
      name: config.siteTitle,
      description: config.siteDescription,
      short_name: config.siteShortTitle,
      theme_color: config.themeColor,
      background_color: config.bkgColor,
    },
  },
  // ------------------------------------
  // BROWSERCONFIG OPTIONS
  // ------------------------------------
  browserconfig: {
    TileColor: config.themeColor,
  },
  // ------------------------------------
  // SITEMAP OPTIONS
  // ------------------------------------
  sitemap: {
    hostname: config.siteUrl,
  },
  // ------------------------------------
  // GOOGLE ANALYTICS
  // ------------------------------------
  googleAnalytics: {
    id: config.googleAnalyticsID,
  },
  // ------------------------------------
  // BUILD CONFIGURATION
  // ------------------------------------
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
}
