/**
 * This file configures the proxy to the backend server.
 * By default it uses the file proxy.default.js.
 * If you want to override the configuration, create a file proxy.js
 */

const fs = require('fs-extra');
const path = require('path');

const getFilePath = function (url) {
  let matchApf = url.match(/apfplus\/modules\/(\w+)\/(\w+)[;]?/);
  if (matchApf) {
    return `${__dirname}/../mocks/${matchApf.pop()}.xml`
  }
  let matchDac = url.match(/dac\/(\w+)[;]?/);
  if (matchDac) {
    return `${__dirname}/../mocks/${matchDac.pop()}.json`
  }
  return '';
}

const bypass = function (req, res, proxyOptions) {
  if (process.argv.indexOf('--mock') !== -1) {
    const mockFilePath = getFilePath(req._parsedUrl.pathname);
    if (fs.existsSync(mockFilePath)) {
      return res.send(fs.readFileSync(mockFilePath, 'utf8'));
    }
  }
}

function getProxyConfiguration() {
  function loadProxyConfiguration(filename) {
    const proxyConfig = require(filename);
    Object.keys(proxyConfig).forEach(key => proxyConfig[key].bypass = bypass);
    return proxyConfig;
  }

  const configFile = path.resolve(__dirname, 'proxy.js');
  const defaultConfigFile = path.resolve(__dirname, 'proxy.default.js');

  if (fs.existsSync(configFile)) {
    return loadProxyConfiguration(configFile);
  }

  return loadProxyConfiguration(defaultConfigFile);
}

try {
  module.exports = getProxyConfiguration();
} catch (err) {
  throw new Error(`Could not load proxy configuration: ${err.message}`);
}
