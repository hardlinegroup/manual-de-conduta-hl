const fs = require('fs');

const oldHtml = fs.readFileSync('old_manual.html', 'utf8');

const sectionIndex = oldHtml.indexOf('id="page-curso-ruas"');
const tableStartIndex = oldHtml.indexOf('<table class="q-table">', sectionIndex);
const tableEndIndex = oldHtml.indexOf('</table>', tableStartIndex) + '</table>'.length;

if (sectionIndex === -1 || tableStartIndex === -1 || tableEndIndex === -1) {
  console.error("Could not find the table in page-curso-ruas");
  process.exit(1);
}

const tableHtml = oldHtml.substring(tableStartIndex, tableEndIndex).trim();

let appJs = fs.readFileSync('./js/app.js', 'utf8');

const escapedHtml = tableHtml
  .replace(/\\/g, '\\\\')
  .replace(/\`/g, '\\\`')
  .replace(/\$/g, '\\$');

const regex = new RegExp('(ruas:\\{[^}]*?html:\`)[\\s\\S]*?(\`\\})', 'g');
appJs = appJs.replace(regex, (match, p1, p2) => p1 + escapedHtml + p2);

fs.writeFileSync('./js/app.js', appJs, 'utf8');
console.log('Ruas e Referencias content injected!');
