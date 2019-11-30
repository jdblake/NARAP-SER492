module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:5000',
      },
    },
  },
};
