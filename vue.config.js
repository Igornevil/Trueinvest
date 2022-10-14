const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  configureWebpack: config => {
    module: {
      rules: [
        // ... другие правила опущены
  
        // это правило будет применяться к обычным файлам `.scss`
        // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
    // плагин опущен

    if (process.env.NODE_ENV === 'production') {
      // изменение конфигурации для production...
    } else {
      // изменения для разработки...
    }
  }
}