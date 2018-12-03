let args = process.argv.slice(2);

const fse = require('fs-extra');
const colors = require('./utilities/color');
const chokidar = require('chokidar');

const distFolder = require('./utilities/outDir');

const watch = args.includes('--watch') || args.includes('-w');

const deployConf = `module.exports = {
  domainName: "DOMAIN_NAME"
}
`;

if (!fse.existsSync('./deploy.conf.js')) {
  fse.writeFileSync('deploy.conf.js', deployConf);
  console.log('Please update deploy.conf.js file with your domain name');
  process.exit();
}

const domainName = require('../deploy.conf').domainName;

let domainFolder;
let domainPath;
const domainWebApp = `D:\\domains\\${domainName}\\apps\\staging\\frontendapp\\frontendapp\\etv-webapp`;
const domainWepAppIndex = `${domainWebApp}\\app_webapp_demo\\WEB-INF\\webappdemo`;

if (args[0] === 'apache') {
  domainFolder = `W:\\app\\dev\\${domainName}`;
  domainPath = `${domainFolder}\\apache\\htdocs\\app_webapp_demo-static\\`;
} else {
  domainFolder = `D:\\domains\\${domainName}`;
  domainPath = `${domainFolder}\\web\\app_webapp_demo-static\\`;
}

if (watch) {
  console.log(colors.info, 'watching ./dist');
  chokidar.watch('./dist', {awaitWriteFinish: true, ignoreInitial: true}).on('all', (event, path) => {
    console.log(colors.error, path);
    console.log(colors.error, event);
    if (event !== 'unlink' && event !== 'addDir') {
      if (path.indexOf('index.jsp') > -1) {
        fse.copySync(path, `${domainWepAppIndex}\\index.jsp`);
      } else {
        console.log(colors.error, `${domainPath}${path.split('dist\\')[1]}`);
        fse.copySync(path, `${domainPath}${path.split('dist\\')[1]}`);
      }
    }
  });
} else {
  if (!fse.pathExistsSync(distFolder)) {
    throw Error('Dist folder does not exists, please run npm run build');
  }

  if (!fse.pathExistsSync(domainFolder)) {
    throw Error(`Domain does not exist, ${domainFolder}`);
  }

  if (!fse.pathExistsSync(`${domainWebApp}\\app_webapp_demo`)) {
    if (!fse.pathExistsSync(`${domainWebApp}\\app_webapp_demo.war`)) {
      throw Error('Webapp demo webapp does not exist in this domain : ' + domainName);
    }
    throw Error('Webapp demo webapp is not extracted, please extract app_webapp_demo.war before performing this action');
  }

  if (!fse.pathExistsSync(domainPath)) {
    console.warn(colors.warning, domainPath + ' does not exists, creating it');
  }

  copy();

}

function copy() {
  console.log(colors.success, 'copy statics to ' + domainPath);
  console.log(colors.success, 'copy index.jsp to ' + domainWepAppIndex);
  fse.emptyDirSync(domainPath);
  fse.copySync(distFolder, domainPath);
  fse.copySync(`${distFolder}\\index.jsp`, `${domainWepAppIndex}\\index.jsp`);
  fse.removeSync(`${domainPath}\\index.jsp`);
}
