module.exports = {
  lintOnSave: false,
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
  publicPath: process.env.NODE_ENV === 'production'
     ? '/LibTraffic'
     : '/'
};
