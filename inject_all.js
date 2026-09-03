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

  // Safely remove the header
  const headerStart = html.indexOf('<div class="page-header">');
  if (headerStart !== -1) {
    let headerEnd = html.indexOf('</div>', headerStart); // label div end
    headerEnd = html.indexOf('</div>', headerEnd + 1); // page-header end
    if (headerEnd !== -1) {
      html = html.substring(headerEnd + 6).trim();
    }
  }
  
  // Just in case, clean up any stray H1s or descriptions at the top
  html = html.replace(/^<h1>[\s\S]*?<\/h1>/, '');
  html = html.replace(/^<p class="page-desc">[\s\S]*?<\/p>/, '');
  html = html.trim();
  
  // Remove footer
  const footerStart = html.indexOf('<div class="page-footer">');
  if (footerStart !== -1) {
    html = html.substring(0, footerStart).trim();
  }
  
  // Clean up any other weird stuff
  html = html.replace(/callout info/g, 'callout');
  html = html.replace(/callout warning/g, 'callout warn');
  html = html.replace(/callout danger/g, 'callout danger');

  sections[id] = html.trim();
}

let appJs = fs.readFileSync('./js/app.js', 'utf8');

// Do NOT overwrite boosting, ruas, codigos
delete sections['boosting'];
delete sections['ruas'];
delete sections['codigos'];

for (const id in sections) {
  const escapedHtml = sections[id]
    .replace(/\\/g, '\\\\')
    .replace(/\`/g, '\\\`')
    .replace(/\$/g, '\\$');
  
  // Regex must handle `},` or `}` at the end
  const regex = new RegExp(`(${id}:\\{[^}]*?html:\`)[\\s\\S]*?(\`\\},?)`, 'g');
  appJs = appJs.replace(regex, (match, p1, p2) => p1 + escapedHtml + p2);
}

fs.writeFileSync('./js/app.js', appJs, 'utf8');
console.log('Injected all missing sections successfully!');
