const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      //   changeOrigin: true,
    })
  );
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      //   changeOrigin: true,
    })
  );
  app.use(
    '/auth/github',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      //   changeOrigin: true,
    })
  );
  // app.post(
  //   '/questions',
  //   createProxyMiddleware({
  //     target: 'http://localhost:5000/',
  //     //   changeOrigin: true,
  //   })
  // );
};
