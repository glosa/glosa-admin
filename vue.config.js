module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  pwa: {
    name: 'GlosaAdmin',
    themeColor: '#ffaaea',
    msTileColor: '#ffaaea',
    manifestOptions: {
      background_color: '#ffaaea'
    }
  },

  //publicPath: '/',
    publicPath: '/glosa-admin/',
  outputDir: 'docs'
}
