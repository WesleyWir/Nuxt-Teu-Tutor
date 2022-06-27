require('dotenv').config()
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  dev: true,
  
  env: {
    baseUrl: process.env.BASE_URL,
    serverImagesHost: process.env.SERVER_IMAGES_HOST
  },

  // Server
  server: {
    port: 3000, // default: 3000
    host: process.env.BASE_HOST
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Teu Tutor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: 'imgs/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/imgs/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/imgs/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/imgs/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/imgs/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/imgs/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/imgs/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/imgs/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/imgs/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/imgs/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/imgs/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/imgs/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/imgs/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/imgs/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/imgs/favicon/manifest.json' }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  styleResources: {
    scss: '~/assets/scss/global/global.scss'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap',
    '@/plugins/vee-validate',
    '@/plugins/axios',
    '@/plugins/global-mixins-setup.js',
    '@/plugins/filter-date.js',
    '@/plugins/money.js',
    '@/plugins/v-calendar.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    'vue-wait/nuxt',
    'vue2-editor/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'pt',
        file: 'pt-BR.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'pt'
  },

  auth: {
    strategies: {
      local_student: {
        scheme: 'local',
        cookie: {
          prefix: 'auth.student.',
          options: {
            path: '/'
          }
        },
        token: {
          prefix: '_student_token.',
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 172800
        },
        // refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
        //        property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
        //        data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
        //      },
        user: {
          property: 'student',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/sessions/students', method: 'post' },
          // refresh: { url: "/sessions/students/refresh", method: "post" },
          logout: { url: '/sessions/students', method: 'delete' },
          user: { url: '/sessions/students/me', method: 'get' }
        },
      },
      local_educator: {
        scheme: 'local',
        cookie: {
          prefix: 'auth.educator.',
          options: {
            path: '/'
          }
        },
        token: {
          prefix: '_educator_token.',
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 172800
        },
        // refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
        //        property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
        //        data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
        //      },
        user: {
          property: 'educator',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/sessions/educators', method: 'post' },
          // refresh: { url: "/sessions/educators/refresh", method: "post" },
          logout: { url: '/sessions/educators', method: 'delete' },
          user: { url: '/sessions/educators/me', method: 'get' }
        },
      }
    },
    redirect: {
      login: '/auth/not-loggedin',
      logout: '/auth/sucess-logout',
      callback: '/auth/not-loggedin',
      home: false
    }
  },

  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxtjs/axios"
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate'
    ]
  },

  fontawesome: {
    icons: {
      solid: ['faSearch', 'faAngleDown', 'faAngleUp', 'faGraduationCap', 'faEye',
        'faEyeSlash', 'faUndo', 'faSignOut', 'faCamera', 'faCirclePlus', 'faMapMarkerAlt',
        'faStar', 'faChalkboardTeacher', 'faEnvelope', 'faTrash', 'faCalendarXmark',
        'faPen', 'faCaretSquareLeft', 'faCaretSquareRight', 'faCircleCheck', 'faCircleXmark',
        'faArrowsRotate'],
      brands: ['faFacebook', 'faGoogle', 'faWhatsapp', 'faLinkedin']
    }
  }
}
