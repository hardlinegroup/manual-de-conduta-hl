const fs = require('fs');

const oldHtml = fs.readFileSync('old_manual.html', 'utf8');

const startIndex = oldHtml.indexOf('<table class="q-table">');
const endIndex = oldHtml.indexOf('<div class="page-footer">', startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find the q-table or end of section in old_manual.html");
  process.exit(1);
}

const tableHtml = oldHtml.substring(startIndex, endIndex).trim();


let appJs = fs.readFileSync('./js/app.js', 'utf8');

const escapedHtml = tableHtml
  .replace(/\\/g, '\\\\')
  .replace(/\`/g, '\\\`')
  .replace(/\$/g, '\\$');

const regex = new RegExp('(codigos:\\{[^}]*?html:\`)[\\s\\S]*?(\`\\})', 'g');
appJs = appJs.replace(regex, (match, p1, p2) => p1 + escapedHtml + p2);

fs.writeFileSync('./js/app.js', appJs, 'utf8');
console.log('Codigos Q content injected!');
