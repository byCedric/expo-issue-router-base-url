const { createRequestHandler } = require('@expo/server/build/vendor/http');
const express = require('express');
const connect = require('connect');
const morgan = require('morgan');
const createStaticHandler = require('serve-static');
const path = require('path');

const CONFIG_PORT = 3009;
const CONFIG_APP_DIR = path.resolve(__dirname, '../app/dist');

const app = express();
const middleware = connect();

// Serve static files from the app's build directory
middleware.use(
  createStaticHandler(path.join(CONFIG_APP_DIR, 'client'), {
    index: false,
    extensions: ['html'],
  })
);

// Serve dynamic files from app's build directory
middleware.use(
  createRequestHandler({
    build: path.join(CONFIG_APP_DIR, 'server'),
  })
);

// Output request logs for middleware stack
app.use(morgan('tiny'))

// Mount middleware stack at /my/base/url
app.use('/my/base/url', middleware);

// Start server with links in terminal
app.listen(CONFIG_PORT, () => {
  console.log('Server is running:');
  console.log(`  - web: http://localhost:${CONFIG_PORT}/my/base/url`)
  console.log(`  - api: http://localhost:${CONFIG_PORT}/my/base/url/server`)
});
