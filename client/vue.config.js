module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devServer: {
      proxy: "http://localhost:3000",
    },
  },
};
