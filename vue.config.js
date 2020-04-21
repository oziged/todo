module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/transitions.scss";
          @import "~@/assets/scss/main.scss";
        `
      }
    }
  }
};