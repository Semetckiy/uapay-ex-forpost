/**
 * This script starts `ng serve` with the fully qualified hostname of the developer
 * machine as the `--host` argument.
 *
 * The reason behind this peculiar behavior is that the SSL certificates are issued
 * for *.amadeus.com and will hence not be accepted by browsers for localhost.
 *
 * Please do not consider to --disable-host-check because this might leak the source
 * code to an external attacker. For details see
 * https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
 */

const os = require('os');
const dns = require('dns');
const cli = require('@angular/cli').default;

function startAngularCli(hostname) {
  let standardInput;
  try {
    standardInput = process.stdin;
  } catch (e) {
    delete process.stdin;
    process.stdin = new events.EventEmitter();
    standardInput = process.stdin;
  }

  // only add the --host argument if not provided explicitly
  const args = process.argv.slice(2);
  let cliArgs = ['serve'];
  if (args.indexOf('--host') < 0) {
    cliArgs.push('--host', '0.0.0.0');
    cliArgs.push('--disable-host-check');
  }
  cliArgs.push(...args);
  // Mock is used for the proxy configuration not CLI directly
  const indexMock = cliArgs.indexOf('--mock');
  if (indexMock > 0) {
    cliArgs.splice(indexMock, 1);
  }

  return cli({
    cliArgs,
    inputStream: standardInput,
    outputStream: process.stdout,
  });
}

startAngularCli()
  .then(result => process.exit(typeof result === 'object' ? result.exitCode : result));
