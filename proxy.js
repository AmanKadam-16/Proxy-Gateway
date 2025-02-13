const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3090; // Or any port you prefer

// Proxy configuration: forward all requests to the remote API
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://ritapi.aaditechnology.com',
    changeOrigin: true, // Needed if the remote server uses virtual hosting
    logLevel: 'debug',
  })
);

app.listen(PORT, () => {
  console.log(`Reverse proxy server is running on port ${PORT}`);
});
