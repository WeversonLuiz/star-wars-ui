const proxy = {
  "/api": {
    "target": 'https://swapi.dev',
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": false
  }
};
module.exports = proxy;
