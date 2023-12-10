const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/src',
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/main.scss";`
      }
    }
  }
})
