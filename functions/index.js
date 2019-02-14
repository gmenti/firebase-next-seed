const functions = require('firebase-functions');

exports.api = functions.https.onRequest((req, res) => {
  return require('./api')(req, res);
});

exports.application = functions.https.onRequest(async (req, res) => {
  const next = require('next');

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    // distDir: '.next',
    // assetPrefix: './hotelaria-f8835/us-central1/application/',
  };

  const app = next({
    dev: false,
    config: nextConfig,
  });

  const handler = app.getRequestHandler();
  await app.prepare();

  return await handler(req, res);
});
