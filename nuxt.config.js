const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'hello-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p'
      },

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // "element-ui/lib/theme-chalk/index.css"
    { src: '~assets/main.scss', lang: 'scss' }
    // { src: 'bulma/bulma.sass', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/element-ui", ssr: false },
    { src: "@plugins/filters.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios", "element-ui", "dayjs"],
    // publicPath: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.min.js",
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader") {
          rule.exclude = /node_modules/;
        }
        return rule;
      });
    }
  }
}
