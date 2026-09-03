const fs = require('fs');
let appJs = fs.readFileSync('./js/app.js', 'utf8');

const htmlContent = `
<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div>Última atualização: 02/09/2026 as 22:02</div>
</div>

<h2>I. DIRETRIZES TÁTICAS GERAIS</h2>
<div class="def-list">
  <div class="def-item"><div class="def-term">Prioridade Absoluta:</div><div class="def-desc">O veículo principal é o foco primário de toda a operação. Caso inoperante e haja fuga a pé, a prioridade permanece na captura do suspeito principal, mesmo que isso exija descontinuar a perseguição aos apoios.</div></div>
  <div class="def-item"><div class="def-term">Deslocamento Inicial:</div><div class="def-desc">Três viaturas devem deslocar-se imediatamente ao veículo interceptado para iniciar o acompanhamento. As demais unidades permanecem em QRV, aguardando solicitação conforme a classe do procedimento.</div></div>
  <div class="def-item"><div class="def-term">Contenção de Apoios:</div><div class="def-desc">Confirmado o apoio aos suspeitos, a viatura terciária deve conter o veículo de apoio. Com a chegada de reforço, a unidade retorna ao acompanhamento principal assumindo funções de adiantamento e cerco.</div></div>
  <div class="def-item"><div class="def-term">Objetivo Tático:</div><div class="def-desc">Impedir que o veículo de apoio realize reparos, abastecimento ou qualquer ação que favoreça a continuidade da fuga e/ou realização de um próximo apoio ao veículo principal.</div></div>
  <div class="def-item"><div class="def-term">Identificação da Ocorrência:</div><div class="def-desc">Ao chegar no QTH da ocorrência e avistar indivíduos arrombando o veículo principal (armados com pistolas ou armas brancas), americanos mortos ao chão caracterizam-se as ocorrências como boosting.</div></div>
</div>

<h2>II. CLASSIFICAÇÃO DE OPERAÇÕES</h2>
<div class="def-list">
  <div class="def-item"><div class="def-term">Classe B ou Inferior:</div><div class="def-desc">Acompanhamento por 3 unidades padrão e 6 em QRV. Limite de 3 viaturas por veículo de apoio sendo eles classe S (máximo de 9 viaturas de apoio). Proibida a participação do G.R.A. no acompanhamento principal.</div></div>
  <div class="def-item"><div class="def-term">Classe A:</div><div class="def-desc">Acompanhamento por 3 unidades padrão e 6 em QRV. Limite de 3 viaturas por apoio sendo eles classe S (máximo de 9 de apoio). Autorizada a atuação do G.S.A., exceto se o veículo de apoio for de Classe B ou inferior.</div></div>
  <div class="def-item"><div class="def-term">Classe S:</div><div class="def-desc">Acompanhamento por 3 unidades padrão e 6 em QRV. Permitidas 3 viaturas por veículo de apoio (máximo de 9 de apoio). Presença obrigatória do G.S.A., liberado para atuar em qualquer apoio independentemente da classe.</div></div>
</div>

<h2>III. PROTOCOLOS DE INTERVENÇÃO (PIT, BOX E SPIKE)</h2>
<div class="def-list">
  <div class="def-item"><div class="def-term">Aplicação de PIT:</div><div class="def-desc">Permitido apenas até a velocidade máxima de 150 KM/H, com intervalo mínimo de 30 segundos entre tentativas. O objetivo é desestabilizar a trajetória, sendo estritamente proibido causar STALL proposital ou aplicar em áreas movimentadas e becos.</div></div>
  <div class="def-item"><div class="def-term">Uso de SPIKE:</div><div class="def-desc">Liberado contra apoios de Classe A ou S após confirmação de COD 4/COD 6 ou resgate. Uso exclusivo da unidade SPEED (ou se autorizado pelo Alto Comando). Proibido transportar no inventário pessoal.</div></div>
</div>

<h2>IV. PROTOCOLOS PARA SITUAÇÕES ADVERSAS</h2>
<div class="def-list">
  <div class="def-item"><div class="def-term">Reabastecimento e Reparo:</div><div class="def-desc">Autorizado a todos os oficiais (incluindo G.S.A.) no momento em que o veículo principal for flagrado abastecendo, reparando ou com a chegada confirmada dos apoios.</div></div>
  <div class="def-item"><div class="def-term">Incapacitação de Unidade:</div><div class="def-desc">Em caso de desacordamento, explosão ou queda do veículo em meio aquático, declara-se QTA absoluto, sendo vedado o retorno à ocorrência.</div></div>
  <div class="def-item"><div class="def-term">Veículo Inoperante (4 Stalls):</div><div class="def-desc">Persistindo a recusa de desembarque dos ocupantes, deve-se verbalizar a ordem por 3 vezes. Permanecendo o descumprimento, autoriza-se o uso do taser para extração.</div></div>
  <div class="def-item"><div class="def-term">Capotamento:</div><div class="def-desc">Os oficiais devem estabelecer cerco imediato ao redor do veículo. As unidades de apoio devem se posicionar estrategicamente para evitar intervenções externas.</div></div>
</div>

<h2>V. PROTOCOLO DE APREENSÃO E REGISTRO</h2>
<div class="def-list">
  <div class="def-item"><div class="def-term">Local de Apreensão:</div><div class="def-desc">A apreensão do veículo principal deve ser efetuada exclusivamente na lateral da DP-G. Em caso de 4 stalls, utilize o kit de reparo para remover 1 stall e efetue a escolta até o local.</div></div>
  <div class="def-item"><div class="def-term">Registro Fotográfico:</div><div class="def-desc">O oficial responsável pela prisão no pátio deve realizar o registro fotográfico no local e compartilhá-lo com a equipe envolvida. Os demais oficiais mantêm vigilância ativa contra possíveis tentativas de resgate.</div></div>
</div>
`.trim();

const escapedHtml = htmlContent
  .replace(/\\/g, '\\\\')
  .replace(/\`/g, '\\\`')
  .replace(/\$/g, '\\$');

const regex = new RegExp('(boosting:\\{[^}]*?html:\`)[\\s\\S]*?(\`\\})', 'g');
appJs = appJs.replace(regex, (match, p1, p2) => p1 + escapedHtml + p2);

fs.writeFileSync('./js/app.js', appJs, 'utf8');
console.log('Boosting content updated to def-list format!');
