module.exports = {
  lintOnSave: false,
  outputDir: "docs",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#8d6449",
            "link-color": "#fff",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
        .test(/\.pdf|ico$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
            limit: 10000,
        })
  },
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production'
  //    ? '/'
  //   : '/',
};
