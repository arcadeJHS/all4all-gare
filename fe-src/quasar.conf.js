const buildDir = '../public';
const serverLocalUrl = 'http://localhost:8080';

module.exports = function (ctx) {
  return {
    preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'firebase',
      'axios'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v5'
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'eva-icons'
    ],

    framework: {
      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QFooter',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnGroup',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QForm',
        'QInput',
        'QBreadcrumbs',
        'QBreadcrumbsEl',
        'QAvatar',
        'QSelect',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QInfiniteScroll',
        'QSpinnerDots',
        'QSpinnerGears',
        'QSpinnerFacebook',
        'QSpinnerPuff',
        'QInnerLoading',
        'QExpansionItem',
        'QImg',
        'QSeparator',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QDate',
        'QPopupProxy',
        'QField',
        'QSlider',
        'QSpace',
        'GoBack',
        'QPageSticky',
        'QDialog',
        'QPopupEdit',
        'QMenu',
        'QTabs',
        'QTab',
        'QTabPanels',
        'QTabPanel',
        'QToggle',
        'QBadge',
        'QChip',
        'QScrollArea',
        'QTooltip',
        'QCheckbox',
        'QBtnToggle'
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage',
        'Dialog'
      ],
      config: {
        notify: {}
      },

      cssAddon: true,

      // iconSet: 'ionicons-v4'
      lang: 'it' // Quasar language
    },

    supportIE: false,

    build: {
      distDir: buildDir,
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },

    devServer: {
      open: true, // opens browser window automatically
      // https: false,
      // port: 8080,
    },

    animations: 'all',

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'InjectManifest',
      /*
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true
      },
      */
      manifest: {
        name: 'ALL4ALL-Gare',
        short_name: 'ALL4ALL-Gare',
        description: 'Iscrizione gare ALL4ALL',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#ff0000',
        start_url: '/',
        icons: [
          {
            'src': 'statics/icons/apple-icon-152x152.png',
            'sizes': '152x152',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ms-icon-144x144.png',
            'sizes': '144x144',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
