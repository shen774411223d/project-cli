console.log(process.env);
module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_PATH_URL
  }
}