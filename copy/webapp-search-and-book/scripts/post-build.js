const fs = require('fs-extra');

var indexHtml = 'dist/ui/index.html';
var indexJsp = 'dist/ui/index.jsp';
var clpHtml = '<script src="/LoginService/embedUiLess?v=1.1" async></script>';
var clpJsp = '<script src="<%= request.getAttribute("SITE_CLP_URL")%>" async></script>';

fs.copySync(indexHtml, indexJsp);
var result = fs.readFileSync(indexJsp, 'utf8');
result = result.replace(clpHtml, clpJsp);
fs.writeFileSync(indexJsp, result);
