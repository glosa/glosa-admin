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
    name: 'Glosa admin',
    themeColor: '#ffaaea',
    msTileColor: '#ffaaea',
    manifestOptions: {
      background_color: '#ffaaea'
    }
  },

  publicPath: '/',
  outputDir: 'docs'
}
