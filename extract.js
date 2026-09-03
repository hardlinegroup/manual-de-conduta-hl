const fs = require('fs');

let data = fs.readFileSync('old_manual.html', 'utf8');

const sections = {};
const parts = data.split('<div class="section-page');

for (let i = 1; i < parts.length; i++) {
  const part = parts[i];
  const idMatch = part.match(/id="page-([^"]+)"/);
  if (!idMatch) continue;
  let id = idMatch[1];
  
  if (id === 'intro') id = 'home';
  if (id === 'conduta') id = 'upf';
  if (id === 'curso-comunicacao') id = 'cursoCom';
  if (id === 'curso-modulacao') id = 'modulacao';
  if (id === 'curso-tablet') id = 'tablet';
  if (id === 'curso-acompanhamento') id = 'cursoAcomp';
  if (id === 'curso-abordagem') id = 'cursoAb';
  if (id === 'curso-boosting') id = 'boosting';
  if (id === 'curso-ruas') id = 'ruas';
  
  const firstCloseBracket = part.indexOf('>');
  let html = part.substring(firstCloseBracket + 1).trim();
  
  if (i === parts.length - 1) {
    const mainEnd = html.indexOf('</main>');
    if (mainEnd !== -1) html = html.substring(0, mainEnd);
  }
  
  const lastDiv = html.lastIndexOf('</div>');
  if (lastDiv !== -1) {
    html = html.substring(0, lastDiv).trim();
  }

  // Remove page-header and its children safely by relying on the <div class="page-header">...<h1>...</h1>...</div> pattern
  html = html.replace(/<div class="page-header">[\s\S]*?<\/div>\s*<\/div>/g, '');
  // Because page-header contains a .label div inside, it has one nested div. 
  // We can just strip the header manually or replace h1 and p.page-desc:
  html = html.replace(/<div class="page-header">[\s\S]*?<h1>[\s\S]*?<\/h1>[\s\S]*?<p class="page-desc">[\s\S]*?<\/p>\s*<\/div>/g, '');
  
  // Just in case it's partially stripped:
  html = html.replace(/<h1>[\s\S]*?<\/h1>/g, '');
  html = html.replace(/<p class="page-desc">[\s\S]*?<\/p>\s*<\/div>/g, '');
  
  // Remove page-footer
  html = html.replace(/<div class="page-footer">[\s\S]*?<\/div>/g, '');
  html = html.replace(/<div class="footer-nav">[\s\S]*?<\/div>\s*<\/div>/g, '');
  html = html.replace(/<span.*?>Manual de Conduta — PMHL<\/span>[\s\S]*?<\/div>/g, '');
  html = html.replace(/<button class="footer-btn"[\s\S]*?<\/button>\s*<\/div>\s*<\/div>/g, '');
  
  // Update callout classes
  html = html.replace(/callout info/g, 'callout');
  html = html.replace(/callout warning/g, 'callout warn');
  html = html.replace(/callout danger/g, 'callout danger');
  
  // Cleanup empty divs or rogue </div> tags
  html = html.replace(/<div class="page-footer">\s*<\/div>/g, '');
  html = html.replace(/<div class="page-footer">\s*<span.*?>[\s\S]*?<\/button>\s*<\/div>\s*<\/div>/g, '');
  html = html.replace(/<div class="page-footer">[\s\S]*?<\/button>\s*<\/div>\s*<\/div>/g, '');

  sections[id] = html.trim();
}

const appJsPath = './js/app.js';
let appJs = fs.readFileSync(appJsPath, 'utf8');

for (const id in sections) {
  const escapedHtml = sections[id]
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
  
  const regex = new RegExp(`(${id}:\\{[^}]*?html:\`)[\\s\\S]*?(\`\\})`, 'g');
  appJs = appJs.replace(regex, `$1${escapedHtml}$2`);
}

// Remove the `app.js` renderer's own duplicate footer buttons if they existed
appJs = appJs.replace(/<div class="pager">[\s\S]*?<\/div>/g, '<div class="pager"><button data-go="${prev}">← Anterior</button><button data-go="${next}">Próximo →</button></div>');

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Dados reinjetados e H1s limpos com sucesso.');
