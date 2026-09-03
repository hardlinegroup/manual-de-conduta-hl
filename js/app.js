const pages = {
  home:{title:'Manual de Conduta',group:'INTRODUÇÃO',icon:'▤',eyebrow:'Documento Oficial',lead:'O 1º Batalhão de Polícia Militar Hardline estabelece, através deste manual, normas, critérios e princípios que regem a conduta, organização e funcionamento da corporação.',html:`<h2>Sobre este Manual</h2>
      <p>O presente manual de conduta busca a preservação dos <strong>princípios éticos</strong>, integridade e defesa dos policiais. Estarão descritos neste manual fatores cujos deverão ser cumpridos por todo e qualquer policial.</p>

      <div class="callout warn">
        <span class="callout-icon">⚠️</span>
        <div>O tempo mínimo de permanência na polícia é de <strong>30 dias</strong>. A quebra desse contrato acarretará em multa, independente do motivo da dispensa.</div>
      </div>

      
      </div>`},
  regulamento:{title:'Regulamento Básico',group:'INTRODUÇÃO',icon:'▤',eyebrow:'Normas Fundamentais',lead:'Diretrizes gerais que orientam a permanência, atuação e responsabilidade dos integrantes do 1º BPM HARDLINE.',html:`<ul class="rule-list">
        <li><span class="rule-num">01</span> Sempre deve-se seguir a hierarquia militar.</li>
        <li><span class="rule-num">02</span> A utilização de armas letais somente é permitida em situações de legítima defesa, seja do oficial ou de terceiros.</li>
        <li><span class="rule-num">03</span> Somente realize a neutralização veicular com as devidas permissões.</li>
        <li><span class="rule-num">04</span> A invasão de locais privados só é permitida em situações de flagrante e/ou mandato judicial.</li>
        <li><span class="rule-num">05</span> A utilização de viaturas que não correspondem à sua unidade é proibida, salvo em casos de patrulha com um membro de outra unidade.</li>
        <li><span class="rule-num">06</span> Nenhum civil deve ser detido sem ser previamente informado sobre o motivo.</li>
        <li><span class="rule-num">07</span> Toda e qualquer abordagem DEVE ter um motivo prévio.</li>
        <li><span class="rule-num">08</span> Toda e qualquer revista só deve ser realizada com fundada suspeita.</li>
        <li><span class="rule-num">09</span> Todos os membros da corporação devem manter uma relação de respeito com todos os civis da cidade.</li>
        <li><span class="rule-num">10</span> Recrutas não podem sair de serviço sob circunstância alguma.</li>
        <li><span class="rule-num">11</span> O tempo mínimo de permanência na polícia é de 30 dias. A quebra acarretará em multa, independente do motivo.</li>
      </ul>`},
  hierarquia:{title:'Hierarquia Militar',group:'ORGANIZAÇÃO',icon:'🎖️',eyebrow:'Organização',lead:'Estrutura hierárquica de referência para identificação de funções e cadeia de comando.',html:`<div class="rank-group">
          <div class="rank-group-header intermediario">Oficiais Intermediários</div>
          <div class="rank-row"><span class="rank-badge">◆◆◆</span><span class="rank-name">Capitão</span></div>
        </div>

        <div class="rank-group">
          <div class="rank-group-header subalterno">Oficiais Subalternos</div>
          <div class="rank-row"><span class="rank-badge">◆◆</span><span class="rank-name">1º Tenente</span></div>
          <div class="rank-row"><span class="rank-badge">◆</span><span class="rank-name">2º Tenente</span></div>
        </div>

        <div class="rank-group">
          <div class="rank-group-header graduado">Praças Graduados</div>
          <div class="rank-row"><span class="rank-badge">▷</span><span class="rank-name">Sub-Tenente</span></div>
          <div class="rank-row"><span class="rank-badge">>>></span><span class="rank-name">1º Sargento</span></div>
          <div class="rank-row"><span class="rank-badge">>></span><span class="rank-name">2º Sargento</span></div>
          <div class="rank-row"><span class="rank-badge">></span><span class="rank-name">3º Sargento</span></div>
        </div>

        <div class="rank-group">
          <div class="rank-group-header pracas">Praças</div>
          <div class="rank-row"><span class="rank-badge">◈◈</span><span class="rank-name">Cabo</span></div>
          <div class="rank-row"><span class="rank-badge">◈</span><span class="rank-name">Soldado</span></div>
          <div class="rank-row"><span class="rank-badge">✦</span><span class="rank-name">Recruta</span></div>
        </div>
      </div>`},
  upf:{title:'Conduta Militar (UPF)',group:'ORGANIZAÇÃO',icon:'⚡',eyebrow:'Disciplina',lead:'Padrões de conduta e postura profissional esperados durante o serviço.',html:`<h2>Escala do UPF</h2>

      <div class="upf-pyramid">
        <div class="upf-row">
          <div class="upf-cell left">Agressão Letal</div>
          <div class="upf-cell right">Força Letal</div>
        </div>
        <div class="upf-row">
          <div class="upf-cell l-orange">Agressão Não Letal</div>
          <div class="upf-cell r-orange">Força Não Letal</div>
        </div>
        <div class="upf-row">
          <div class="upf-cell l-yellow">Resistência Física Ativa</div>
          <div class="upf-cell r-yellow">Controle Físico</div>
        </div>
        <div class="upf-row">
          <div class="upf-cell l-blue">Resistência Física Passiva</div>
          <div class="upf-cell r-blue">Controle de Contato</div>
        </div>
        <div class="upf-row">
          <div class="upf-cell l-green">Cooperativo ou Resistência Verbal</div>
          <div class="upf-cell r-green">Verbalização</div>
        </div>
        <div class="upf-row">
          <div class="upf-cell l-teal">Ato que requer intervenção policial</div>
          <div class="upf-cell r-teal">Presença Física</div>
        </div>
      </div>

      <h2>Detalhamento dos Níveis</h2>

      <h3>🟢 Presença Física</h3>
      <p>É a simples presença policial, diante de um comportamento de normalidade por parte de um agressor, onde não há necessidade do uso de força policial.</p>

      <h3>🟢 Verbalização</h3>
      <p>É a comunicação transmitida pelo policial, utilizada diante de um comportamento cooperativo por parte do agressor, que não oferece resistência e obedece às determinações.</p>

      <h3>🔵 Controle de Contato</h3>
      <p>São as técnicas de condução e imobilizações, inclusive por meio de algemas, utilizadas diante da <strong>resistência passiva</strong> — quando o indivíduo não acata as determinações, ficando simplesmente parado.</p>

      <h3>🟡 Controle Físico</h3>
      <p>É o emprego de força suficiente para superar a <strong>resistência ativa</strong> do indivíduo, que desafia fisicamente o policial, como num caso de fuga. Cães e agentes químicos podem ser utilizados.</p>

      <h3>🟠 Força Não Letal</h3>
      <p>É o uso de todos os métodos não letais — gases fortes, forçamento de articulações, cassetetes — diante de uma agressão não letal pelo agressor, que oferece resistência hostil e física.</p>

      <div class="callout warn">
        <span class="callout-icon">💧</span>
        <div>Durante fugas onde o indivíduo desce do veículo e pula na água, o uso de <strong>Força Não Letal</strong> (socos) é liberado para que o mesmo desista da fuga e se entregue.</div>
      </div>

      <h3>🔴 Força Letal</h3>
      <p>É o mais extremo uso da força. <strong>Só deve ser empregado em último caso</strong>, quando todos os outros recursos já tiverem sido experimentados e o suspeito ameaça a vida de terceiros.</p>`},
  comunicacao:{title:'Comunicação',group:'OPERAÇÕES',icon:'📡',eyebrow:'Operações',lead:'Padrão de comunicação para manter o rádio objetivo, organizado e compreensível.',html:`<h3>💬 Chat /CP</h3>
      <p>O canal de comunicação interna. Usado para anúncios de entrada/saída/pausas, solicitação de PFEM, comunicados, orientações e informes de QRU.</p>

      <div class="code-block">
        <div class="comment">// Exemplos de uso do /CP</div>
        QAP Central, alguma QSV com vaga para PTR. QTH DP-G. (1/3)<br>
        QAP Perícia, estamos com um indivíduo em posse de entorpecentes nas Celas da DP-GOT.
      </div>

      <h2>Canais Externos</h2>

      <h3>🌐 Chat /911</h3>
      <p>Canal de comunicação global com a cidade, visível para todos os civis. Usado para comunicar sobre veículos abandonados antes de aplicar multa (3 chamadas com intervalo mínimo de 3 minutos).</p>

      <div class="code-block">
        <div class="comment">// Exemplo de chamada via /911</div>
        Sr. Patrick Alves Senna, encontra-se na cidade? (1/3)<br>
        Sr. Patrick Alves Senna, encontra-se na cidade? (2/3)<br>
        Sr. Patrick Alves Senna, encontra-se na cidade? (3/3)
      </div>

      <h3>🏥 Chat /112</h3>
      <p>Canal visível para todos os civis. Utilizado <strong>exclusivamente</strong> para solicitar autorização para prestação de primeiros socorros.</p>

      <div class="code-block">
        <div class="comment">// Exemplo de uso do /112</div>
        "Olá, Doutores, boa tarde. Os oficiais estão autorizados a prestar primeiros socorros nas ruas? TKS, Comando Geral PT."
      </div>`},
  codigos:{title:'Códigos Q',group:'OPERAÇÕES',icon:'▣',eyebrow:'Comunicação Operacional',lead:'Referência rápida para códigos utilizados na comunicação da corporação.',html:``},
  acompanhamento:{title:'Acompanhamento',group:'OPERAÇÕES',icon:'🚓',eyebrow:'Procedimento Operacional',lead:'Orientações gerais para acompanhamento veicular dentro dos protocolos do batalhão.',html:`<div class="level-card med">
          <div class="num">MD</div>
          <div class="level-title">Médio Risco</div>
          <div class="level-desc">O policial percebe ameaça e manobras arriscadas.<br><strong>Limite de 3 unidades</strong></div>
        </div>
        <div class="level-card high">
          <div class="num">AR</div>
          <div class="level-title">Alto Risco</div>
          <div class="level-desc">QRU de Cód. 5 ou indivíduos armados.<br><strong>Sem limite de unidades</strong></div>
        </div>
      </div>

      <h2>Funções das Viaturas</h2>

      <div class="vehicle-cards">
        <div class="vehicle-card primary">
          <span class="v-label">PRIMÁRIA</span>
          <div class="v-body">Primeira viatura que acompanha o veículo. Principal responsável — modula o início, informa características veiculares no rádio, modula QTH e direção, faz todos os informes e realiza a prisão dos indivíduos.</div>
        </div>
        <div class="vehicle-card secondary">
          <span class="v-label">SECUNDÁRIA</span>
          <div class="v-body">Mantém o visual da primária e faz os mesmos movimentos, exceto adentrar em becos de passagem travada. Assume o acompanhamento se a primária tiver algum problema.</div>
        </div>
        <div class="vehicle-card tertiary">
          <span class="v-label">TERCIÁRIA</span>
          <div class="v-body">Fica por fora dos becos realizando cerco parcial, sem fechar totalmente as saídas, para desviar o veículo e induzi-lo ao erro. Atentar às saídas pelo GPS.</div>
        </div>
      </div>`},
  revista:{title:'Revista',group:'OPERAÇÕES',icon:'🔎',eyebrow:'Procedimento Operacional',lead:'Procedimentos de segurança e organização para revistas realizadas durante ocorrências.',html:`<h2>Situações de Fundada Suspeita</h2>

      <ul class="rule-list">
        <li><span class="rule-num">FS1</span> Ocultação Facial (uso de máscara)</li>
        <li><span class="rule-num">FS2</span> Uso de coldre e/ou artifícios para arma de fogo</li>
        <li><span class="rule-num">FS3</span> Evasão de locais de QRU (mediante exame residual)</li>
        <li><span class="rule-num">FS4</span> Visualização que o cidadão está portando armamento</li>
      </ul>

      <div class="callout warn">
        <span class="callout-icon">⚠️</span>
        <div>Ao chegar numa QRU de CÓD. 5 com indivíduos desmaiados, a polícia só poderá revistá-los caso o mesmo esteja com armamento em mãos ou equipamento militar/máscara. Caso contrário, o kit residual deverá ser passado primeiro.</div>
      </div>

      <div class="callout danger">
        <span class="callout-icon">🚺</span>
        <div>Um oficial <strong>masculino jamais deve revistar uma abordada feminina</strong>. É obrigatório solicitar uma policial feminina (PFEM). Se não houver PFEM em serviço, realizar o procedimento da caixa ("revistar (caixa)"). Se a suspeita não colaborar, permanece na cela até a chegada de uma PFEM.</div>
      </div>`},
  abordagem:{title:'Abordagem',group:'OPERAÇÕES',icon:'🤝',eyebrow:'Procedimento Operacional',lead:'Fluxo de referência para abordagens organizadas e profissionais.',html:`<h2>Nível 1 — Baixo Risco</h2>
      <p>Abordagem sem risco aparente. Comumente empregada em infrações de trânsito. A educação e respeito ao civil são primordiais.</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">DIRETRIZ</div>
          <div class="def-desc">Não há necessidade de apontar armamento nem solicitar que o cidadão desembarque. O policial se encaminha até o veículo, se identifica, questiona o motivo das infrações e dá advertência verbal. Caso o indivíduo aparente nervosismo extremo, use máscara ou coldre, a abordagem pode evoluir para Nível 2.</div>
        </div>
      </div>

      <h2>Nível 2 — Médio Risco</h2>
      <p>Risco médio. Empregada em situações de fundada suspeita. Solicitar QRR e só iniciar após chegada do apoio.</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">DIRETRIZ</div>
          <div class="def-desc">Com educação, porém firmeza e atenção, o policial aponta o armamento e dá voz de abordagem, ordenando que o cidadão desça do veículo com a mão na cabeça e se encaminhe para trás do veículo. A revista só deve ser realizada em casos de legalidade (máscara, coldre, colete, exame residual).</div>
        </div>
      </div>

      <h2>Nível 3 — Alto Risco</h2>
      <p>Alto risco à vida dos oficiais. Comumente empregada em ocorrências de fogo aberto.</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">DIRETRIZ</div>
          <div class="def-desc">Processo de contenção com técnicas de imobilização e força não letal. Caso o indivíduo não apresente risco claro à vida dos oficiais, o uso da força letal é permitido.</div>
        </div>
      </div>`},
  cod5:{title:'Comportamento em CÓD.5',group:'OPERAÇÕES',icon:'🔴',eyebrow:'Código de Conduta',lead:'Referência para situações classificadas como CÓD.5.',html:`<h2>Uso de Arma de Fogo é Permitido Quando:</h2>

      <ul class="rule-list">
        <li><span class="rule-num">✓</span> O indivíduo rouba uma viatura</li>
        <li><span class="rule-num">✓</span> Tenta contra a vida de algum civil ou policial</li>
        <li><span class="rule-num">✓</span> É avistado com armamento em mãos durante uma QRU de CÓD. 5</li>
        <li><span class="rule-num">✓</span> Pula na água com o veículo em fuga</li>
      </ul>

      <h2>Procedimento para Passagens em Área de CÓD.5</h2>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">PASSO 1</div>
          <div class="def-desc">Alertar verbalmente o indivíduo para se retirar do local.</div>
        </div>
        <div class="def-item">
          <div class="def-term">PASSO 2</div>
          <div class="def-desc">Se persistir: realizar disparos de alerta no chão.</div>
        </div>
        <div class="def-item">
          <div class="def-term">PASSO 3</div>
          <div class="def-desc">Último nível: disparos no pneu do veículo e Abordagem de Código 3.</div>
        </div>
      </div>

      <div class="callout warn">
        <span class="callout-icon">📝</span>
        <div>Colete as informações (placa, modelo/cor, descrição do condutor/ocupantes, direção de fuga) e registre no /cp.<br>Exemplo: <code>Rebla Placa XXXXXX - Aviso 1</code></div>
      </div>`},
  infracoes:{title:'Infrações e Definições',group:'INFRAÇÕES',icon:'⚖️',eyebrow:'Disciplina',lead:'Classificação e referência para análise de condutas incompatíveis com as normas internas.',html:`<div class="def-item">
          <div class="def-term">INDISCIPLINA</div>
          <div class="def-desc">Ações que vão contra as normas, regras e regulamentos estabelecidos no departamento. Pode incluir atrasos constantes, negligência de tarefas, mau uso de recursos, entre outras ações.</div>
        </div>

        <div class="def-item">
          <div class="def-term">HIERARQUIA</div>
          <div class="def-desc">A hierarquia militar é a base da organização da força policial e compõe a cadeia de comando a ser seguida por todos os integrantes das Forças em sua estrutura organizacional.</div>
        </div>

        <div class="def-item">
          <div class="def-term">PREVARICAÇÃO</div>
          <div class="def-desc">Consiste em retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.</div>
        </div>

        <div class="def-item">
          <div class="def-term">DESACATO</div>
          <div class="def-desc">Faltar com o respeito ou afrontar. O crime de desacato ocorre quando alguém ofende um funcionário público que está exercendo seu trabalho.</div>
        </div>

        <div class="def-item">
          <div class="def-term">DESOBEDIÊNCIA</div>
          <div class="def-desc">Previsto no Código Penal — consiste no ato de não acatar ordem legal de funcionário público.</div>
        </div>
      </div>`},
  cursoCom:{title:'Comunicação Operacional',group:'CURSOS',icon:'📡',eyebrow:'Curso',lead:'Módulo de treinamento para padronização da comunicação em serviço.',html:`<div class="def-item">
          <div class="def-term">policiaspeed</div>
          <div class="def-desc">Rádio exclusiva da unidade SPEED. É proibida a entrada de qualquer pessoa que não pertença à unidade. Caso seja identificada essa entrada, o curso será removido.</div>
        </div>
        <div class="def-item">
          <div class="def-term">policiaswat</div>
          <div class="def-desc">Rádio exclusiva da unidade SWAT. É proibida a entrada de qualquer pessoa que não pertença à unidade.</div>
        </div>
        <div class="def-item">
          <div class="def-term">policiagtm</div>
          <div class="def-desc">Rádio exclusiva da unidade GTM. É proibida a entrada de qualquer pessoa que não pertença à unidade.</div>
        </div>
        <div class="def-item">
          <div class="def-term">policiagra</div>
          <div class="def-desc">Rádio exclusiva da unidade GRA. É proibida a entrada de qualquer pessoa que não pertença à unidade.</div>
        </div>
      </div>

      <div class="callout">
        <span class="callout-icon">📻</span>
        <div>Para uma melhor comunicação nas QRUs, sempre que uma QRU estiver completa, informe a mudança de rádio para <strong>Polícia 1, Polícia 2</strong> e assim por diante. Suba para as frequências utilizando a <strong>seta do teclado</strong>.</div>
      </div>

      <h2>Chat /CP</h2>
      <p>Principal meio de comunicação após a rádio. Usado para anúncios de entrada/saída/pausas, solicitação de PFEM, comunicados e informes de QRU.</p>

      <div class="callout danger">
        <span class="callout-icon">🚫</span>
        <div>É expressamente <strong>proibido</strong> perguntar se há QRUs com vaga via RÁDIO. Deve-se utilizar o <code>/cp</code>.</div>
      </div>

      <div class="code-block">
        <div class="comment">// Exemplos /CP</div>
        QAP Central, alguma QSV com vaga para PTR. QTH DP-G. (1/3)<br>
        QAP Perícia, estamos com um indivíduo em posse de entorpecentes nas Celas da DP-Praça.
      </div>

      <h2>Chat /911 — Comunicação Global</h2>
      <p>Canal global visível para todos os civis. Usado para comunicar sobre veículos abandonados antes de aplicar multa. Chame <strong>3 vezes</strong> com intervalo mínimo de 3 minutos.</p>
      <div class="code-block">
        Sr. Hank Alves, encontra-se na cidade? (1/3)<br>
        Sr. Hank Alves, encontra-se na cidade? (2/3)<br>
        Sr. Hank Alves, encontra-se na cidade? (3/3)
      </div>

      <h2>Chat /112 — Médicos</h2>
      <p>Visível para todos os civis. Utilizado <strong>exclusivamente</strong> para solicitar autorização para prestação de primeiros socorros.</p>
      <div class="code-block">"Olá, Doutores, boa tarde. Os oficiais estão autorizados a prestar primeiros socorros nas ruas? TKS, Cmd. Patrick Alves Senna."</div>

      <h2>Liberação de Rádio Após QRU</h2>
      <p>Após a finalização de uma QRU, o oficial responsável deverá informar no CP que a frequência está liberada.</p>
      <div class="code-block">/cp Rádio Polícia2 Liberada</div>

      <h2>Atualização de Informes de QRU no /CP</h2>
      <p>Ao iniciar um acompanhamento, é responsabilidade da primária manter os informes no /CP seguindo o modelo:</p>
      <div class="code-block">
        <div class="comment">// Formato</div>
        QRU | VEÍCULO | 3 DÍGITOS FINAL PLACA | VAGAS OU COD 4, 5 E 6 + RADIO<br><br>
        <div class="comment">// Exemplo</div>
        ATM | Sultan II | Placa: JE5 | Sem vagas | Polícia2
      </div>`},
  modulacao:{title:'Modulação e Anúncios',group:'CURSOS',icon:'🎙️',eyebrow:'Curso',lead:'Padrão de voz e estrutura para anúncios operacionais.',html:`<div class="def-item">
          <div class="def-term">BREVE QTA</div>
          <div class="def-desc">Terciária presta socorro em acidentes envolvidos na QRU e poderá retornar ao acompanhamento assim que possível. Também aplicável se o cachorro morder ou parceiro de PTR tiver forte dor de cabeça.</div>
        </div>
      </div>

      <h2>Prioridade de Modulação em COD5</h2>
      <div class="callout warn">
        <span class="callout-icon">⚡</span>
        <div><strong>SWAT &gt; GRA &gt; Maior Patente presente na QRU</strong><br>Todos os demais oficiais deverão respeitar rigorosamente essa hierarquia.</div>
      </div>

      <h2>Composição da GRA em Ocorrências</h2>
      <ul class="rule-list">
        <li><span class="rule-num">✓</span> Fuga de Abordagem / Suspeito Armado / Confirmado Código 5: GRA presta apoio independente da categoria do veículo.</li>
        <li><span class="rule-num">✓</span> Demais QRUs: Somente S e A em veículos 4 rodas, motos qualquer categoria.</li>
        <li><span class="rule-num">✓</span> O GRA poderá pegar visual de ocorrências com veículos de categorias não permitidas, até que chegue uma unidade terrestre, então deve dar QTA.</li>
      </ul>

      <h2>Anúncios — Ações Fechadas</h2>
      <div class="callout">
        <span class="callout-icon">📢</span>
        <div>Este anúncio deve ser realizado sempre pelo <strong>aplicativo de anúncios do telefone</strong>.</div>
      </div>
      <div class="code-block">A área do [NOME DA AÇÃO] encontra-se restrita por estar sob atividade criminosa, não se aproxime, risco de ser alvejado. ESTE SERÁ O ÚNICO AVISO!</div>

      <h2>Anúncios Gerais</h2>
      <div class="code-block">
        <div class="comment">// Retirada de CÓD.5</div>
        A partir deste informe, a polícia irá se retirar da QRU de disparos (CÓDIGO 5) e será prestado primeiros socorros apenas aos oficiais caídos/feridos no local. Em seguida retornaremos normalmente nossas atividades militares a população do Hardline.
      </div>
      <div class="code-block">
        <div class="comment">// Pacificação</div>
        Comunicamos que hoje será feito uma pacificação na região do Gueto da Groove Street. O objetivo é promover a segurança e tranquilidade em nossa cidade, além de acabar com o crime organizado. Pedimos a colaboração de todos os cidadãos para que se afastem da área durante a operação. Qualquer indivíduo que permanecer na região será considerado hostil.
      </div>`},
  tablet:{title:'Curso de Tablet',group:'CURSOS',icon:'📱',eyebrow:'Curso',lead:'Uso operacional do tablet e organização das informações.',html:`<div class="def-item">
          <div class="def-term">🔒 PRISÕES HOJE</div>
          <div class="def-desc">Total de prisões acumuladas no dia atual.</div>
        </div>
        <div class="def-item">
          <div class="def-term">📋 BOLETINS HOJE</div>
          <div class="def-desc">Total de ocorrências registradas no dia.</div>
        </div>
        <div class="def-item">
          <div class="def-term">🚗 VEÍCULOS APREENDIDOS</div>
          <div class="def-desc">Total de veículos retidos pela corporação no período.</div>
        </div>
      </div>

      <div class="callout">
        <span class="callout-icon">ℹ️</span>
        <div>Abaixo dos 4 cards principais há dois painéis adicionais: <strong>📈 Estatísticas Semanais</strong> (gráfico de prisões dos últimos 7 dias) e <strong>📢 Avisos e Anúncios</strong> (canal oficial de comunicados).</div>
      </div>

      <!-- Módulo 02 -->
      <h2>02 — Entrar e Sair de Serviço</h2>

      <div class="callout danger">
        <span class="callout-icon">⚠️</span>
        <div><strong>REGRA OBRIGATÓRIA</strong> — Sempre que entrar no servidor, você deve SAIR e ENTRAR novamente em serviço. Sem isso, suas horas NÃO serão contabilizadas.</div>
      </div>

      <p>No canto superior esquerdo do tablet existe o botão <strong>EM SERVIÇO</strong>. Ele registra automaticamente o início e fim do seu turno — é a peça mais importante para sua progressão na carreira.</p>

      <ul class="rule-list">
        <li><span class="rule-num">01</span> Entrou no servidor → Abra o tablet → Clique em <strong>"Entrar em Serviço"</strong></li>
        <li><span class="rule-num">02</span> Durante o turno → Realize boletins, apreensões e consultas normalmente</li>
        <li><span class="rule-num">03</span> Vai sair do servidor → Clique em <strong>"Sair de Serviço"</strong> antes de deslogar</li>
        <li><span class="rule-num">04</span> Voltou ao servidor → Repita sempre — sair e entrar novamente é obrigatório</li>
      </ul>

      <div class="callout warn">
        <span class="callout-icon">⏱️</span>
        <div>Horas não contabilizadas afetam diretamente sua progressão de patente e avaliações mensais. Nunca pule esse procedimento.</div>
      </div>

      <!-- Módulo 03 -->
      <h2>03 — Chat do Departamento</h2>
      <p>O Chat do Departamento é o canal de comunicação interno entre todos os oficiais em serviço. Funciona como uma rádio digital — segura e visível apenas para a corporação.</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">📡 TEMPO REAL</div>
          <div class="def-desc">Mensagens aparecem instantaneamente para todos os oficiais em serviço.</div>
        </div>
        <div class="def-item">
          <div class="def-term">🔒 LIVE SECURE</div>
          <div class="def-desc">Canal criptografado — apenas membros da PM têm acesso.</div>
        </div>
        <div class="def-item">
          <div class="def-term">🗑 APENAS SESSÃO</div>
          <div class="def-desc">Mensagens apagadas automaticamente a cada reinicialização do servidor.</div>
        </div>
        <div class="def-item">
          <div class="def-term">🪪 AUTO-IDENTIFICAÇÃO</div>
          <div class="def-desc">Seu cargo e nome são adicionados automaticamente em cada mensagem.</div>
        </div>
      </div>

      <h3>Como usar corretamente</h3>
      <ul class="rule-list">
        <li><span class="rule-num">✅</span> Coordenar perseguições, solicitar backup e passar informações táticas</li>
        <li><span class="rule-num">✅</span> Comunicar prisões realizadas e atualizar a equipe sobre ocorrências em campo</li>
        <li><span class="rule-num">⚠️</span> Não use para assuntos pessoais — o canal é monitorado pelo alto comando</li>
        <li><span class="rule-num">⚠️</span> Informações importantes devem ser registradas em boletim — o chat é apagado ao reiniciar</li>
      </ul>

      <!-- Módulo 04 -->
      <h2>04 — Gerenciamento de Membros</h2>
      <p>A aba <strong>Membros</strong> exibe todos os policiais cadastrados na corporação com suas informações completas.</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">🪪 NOME E ID</div>
          <div class="def-desc">Seu nome de personagem e identificador único no sistema (ex: FUCI74R8).</div>
        </div>
        <div class="def-item">
          <div class="def-term">⭐ CARGO / PATENTE</div>
          <div class="def-desc">A patente atual: Cabo, Sargento, Tenente, SubTenente, Comando Geral...</div>
        </div>
        <div class="def-item">
          <div class="def-term">📞 NÚMERO DE CONTATO</div>
          <div class="def-desc">Telefone in-game para contato direto com o oficial em assuntos operacionais.</div>
        </div>
        <div class="def-item">
          <div class="def-term">⏱️ HORAS DO MÊS</div>
          <div class="def-desc">Total de horas registradas no mês — contabilizadas pelo sistema de entrada/saída. Usadas nas avaliações de patente e promoções.</div>
        </div>
        <div class="def-item">
          <div class="def-term">🟢 STATUS ATUAL</div>
          <div class="def-desc">Online = ativo no servidor agora | Offline = deslogado ou dormindo.</div>
        </div>
      </div>

      <!-- Módulo 05 -->
      <h2>05 — Boletins de Ocorrência</h2>
      <p>A aba <strong>Boletins</strong> é onde você registra formalmente todas as ocorrências. Sempre que for apreender um indivíduo, um boletim deve ser criado.</p>

      <h3>Entendendo a lista de boletins</h3>
      <div class="def-list">
        <div class="def-item"><div class="def-term">🔢 ID DO BOLETIM</div><div class="def-desc">Número sequencial único que identifica cada registro oficialmente (ex: #27).</div></div>
        <div class="def-item"><div class="def-term">📝 TÍTULO</div><div class="def-desc">Nome do oficial que abriu o boletim + trecho inicial do relato.</div></div>
        <div class="def-item"><div class="def-term">📅 DATA E HORA</div><div class="def-desc">Momento exato em que o boletim foi registrado no sistema.</div></div>
        <div class="def-item"><div class="def-term">🔍 SUSPEITO</div><div class="def-desc">Nome do indivíduo detido ou envolvido na ocorrência.</div></div>
        <div class="def-item"><div class="def-term">🗑 EXCLUIR — RESTRITO</div><div class="def-desc">O botão de exclusão está visível mas NENHUM oficial pode excluir boletins. Essa ação é restrita exclusivamente ao Alto Comando.</div></div>
      </div>

      <h3>Como criar um Novo Boletim</h3>
      <p>Clique no botão <strong>+ Novo Boletim</strong> no canto superior direito e preencha cada campo:</p>
      <ul class="rule-list">
        <li><span class="rule-num">01</span> <strong>Buscar Envolvidos</strong> — Pesquise o suspeito pelo ID ou nome do personagem</li>
        <li><span class="rule-num">02</span> <strong>Buscar Oficiais Envolvidos</strong> — Adicione todos os policiais que participaram da ação</li>
        <li><span class="rule-num">03</span> <strong>Imagens (máx. 5)</strong> — Obrigatório mínimo 2 fotos: mochila aberta com itens ilegais + rosto do suspeito</li>
        <li><span class="rule-num">04</span> <strong>Descrição da Ocorrência</strong> — Relato detalhado e cronológico do evento</li>
      </ul>

      <h3>Regras para a foto do suspeito</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin: 16px 0;">
        <div class="callout success" style="margin:0;">
          <span class="callout-icon">✅</span>
          <div><strong>PERMITIDO</strong><br>Rosto completamente visível · Óculos de grau · Iluminação adequada e imagem nítida</div>
        </div>
        <div class="callout danger" style="margin:0;">
          <span class="callout-icon">❌</span>
          <div><strong>PROIBIDO</strong><br>Máscara de qualquer tipo · Óculos escuros · Chapéu, boné ou touca · Qualquer item que oculte o rosto</div>
        </div>
      </div>

      <div class="callout warn">
        <span class="callout-icon">📸</span>
        <div>Se o suspeito estiver com máscara, óculos escuros ou chapéu, instrua-o a remover o item antes de fotografar. A identificação correta é obrigatória para a validade do boletim.</div>
      </div>

      <h3>Exemplo de Boletim Correto — #23</h3>
      <div class="code-block">
        <span class="comment">// Boletim #23 — Modelo Correto</span><br>
        Pessoa Envolvida: Carlito Nobreak Reborn (T08OK6AB)<br>
        Oficiais Envolvidos: Pegasus Reborn, Lett Sant<br>
        Data: 07/05/2026 — 15:04 | Autor: Carlito Nobreak Reborn<br><br>
        RELATO:<br>
        Apos a policia receber uma denuncia de corrida ilegal pela regiao da Vinewood<br>
        Boulevard, chegando ao local tivemos visual de um R35 na coloracao ROXO. O mesmo<br>
        acabou empreendendo fuga. Foi iniciado acompanhamento e apos 20 minutos o suspeito<br>
        acabou batendo e ficando inoperante na regiao do Central. O mesmo foi algemado e<br>
        conduzido ate a DP para ser realizado o procedimento de prisao.<br><br>
        Oficial — Cb. Carlito Nobreak Reborn
      </div>

      <!-- Módulo 06 -->
      <h2>06 — Apreensões e Prisões</h2>
      <p>Após o boletim ser feito e o indivíduo ser encaminhado à DP, acesse a aba <strong>Apreensões</strong>. Ela possui duas seções:</p>

      <div class="def-list">
        <div class="def-item">
          <div class="def-term">🔴 PRESOS EM TEMPO REAL</div>
          <div class="def-desc">Mostra quem está preso no momento com os itens retidos já registrados — atualiza em tempo real.</div>
        </div>
        <div class="def-item">
          <div class="def-term">📋 BOLETINS DISPONÍVEIS</div>
          <div class="def-desc">Lista de boletins com ID, suspeito, data/hora e o botão para processar a prisão.</div>
        </div>
      </div>

      <h3>Como processar a prisão</h3>
      <p>Clique no botão <strong>PRENDER</strong> (vermelho) ao lado do boletim correspondente:</p>
      <ul class="rule-list">
        <li><span class="rule-num">01</span> Confirme o boletim vinculado e o suspeito selecionado</li>
        <li><span class="rule-num">02</span> Preencha os <strong>Itens Apreendidos</strong> — repita os itens da mochila fotografada no boletim</li>
        <li><span class="rule-num">03</span> Selecione os <strong>Crimes cometidos</strong> — o sistema calcula automaticamente a pena e a multa</li>
        <li><span class="rule-num">04</span> Revise o Tempo Total e a Multa antes de confirmar a prisão</li>
      </ul>

      <div class="callout warn">
        <span class="callout-icon">⚖️</span>
        <div><strong>Diminuição de Pena</strong> — A redução do tempo de prisão ou da multa só é autorizada por SGT+ (Sargento ou superior). Nunca altere penas sem autorização do superior hierárquico.</div>
      </div>

      <!-- Módulo 07 -->
      <h2>07 — Multas de Trânsito</h2>
      <p>A aba <strong>Multar</strong> permite aplicar multas de trânsito a infratores abordados. Siga o procedimento correto:</p>
      <ul class="rule-list">
        <li><span class="rule-num">01</span> Realize o boletim primeiro — <strong>OBRIGATÓRIO</strong> antes de qualquer multa</li>
        <li><span class="rule-num">02</span> Localize o infrator pelo passaporte (ID), nome ou placa do veículo</li>
        <li><span class="rule-num">03</span> Confira sempre se a placa está correta antes de prosseguir</li>
        <li><span class="rule-num">04</span> Selecione todas as infrações cometidas — o valor total é calculado automaticamente</li>
        <li><span class="rule-num">05</span> Tire a foto do veículo mostrando a placa visível e os danos</li>
        <li><span class="rule-num">06</span> Clique em <strong>Aplicar Multa</strong> — o infrator recebe notificação automática</li>
      </ul>

      <h3>Tabela de Infrações de Trânsito</h3>
      <table class="q-table">
        <thead>
          <tr><th>#</th><th>Infração</th><th>Multa</th></tr>
        </thead>
        <tbody>
          <tr><td class="q-code">01</td><td class="q-meaning">Excesso de velocidade</td><td>\$700</td></tr>
          <tr><td class="q-code">02</td><td class="q-meaning">Estacionado em local proibido</td><td>\$300</td></tr>
          <tr><td class="q-code">03</td><td class="q-meaning">Dirigir sem cinto de segurança</td><td>\$200</td></tr>
          <tr><td class="q-code">04</td><td class="q-meaning">Dirigir Alcoolizado</td><td>\$2.000</td></tr>
          <tr><td class="q-code">05</td><td class="q-meaning">Alteração de Características do Veículo</td><td>\$500</td></tr>
          <tr><td class="q-code">06</td><td class="q-meaning">Veículo com placa adulterada</td><td>\$500</td></tr>
          <tr><td class="q-code">07</td><td class="q-meaning">Veículo com débitos vencidos</td><td>\$500</td></tr>
          <tr><td class="q-code">08</td><td class="q-meaning">Veículo Danificado para Trafegar</td><td>\$500</td></tr>
          <tr><td class="q-code">09</td><td class="q-meaning">Dirigir na Contra Mão</td><td>\$300</td></tr>
        </tbody>
      </table>

      <div class="callout warn">
        <span class="callout-icon">🪪</span>
        <div>Confira <strong>SEMPRE</strong> a placa antes de aplicar a multa. Multar o veículo errado é um erro grave. Sem a foto do carro com placa visível e danos, a multa pode ser contestada.</div>
      </div>

      <!-- Módulo 08 -->
      <h2>08 — Consultas</h2>
      <p>A aba <strong>Consultas</strong> é a ferramenta de investigação do tablet — permite acessar o histórico completo de qualquer cidadão pelo nome, ID ou CitizenID.</p>

      <div class="def-list">
        <div class="def-item"><div class="def-term">💸 MULTAS</div><div class="def-desc">Todas as multas de trânsito e infrações aplicadas ao cidadão.</div></div>
        <div class="def-item"><div class="def-term">⚠️ INFRAÇÕES</div><div class="def-desc">Histórico de infrações — útil para avaliar reincidência.</div></div>
        <div class="def-item"><div class="def-term">🚗 VEÍCULOS APREENDIDOS</div><div class="def-desc">Lista de veículos do cidadão retidos pela PM.</div></div>
        <div class="def-item"><div class="def-term">🔒 PRISÕES</div><div class="def-desc">Histórico completo de prisões — data, crime, pena e multa.</div></div>
        <div class="def-item"><div class="def-term">📋 BOLETINS</div><div class="def-desc">Todos os boletins onde o cidadão foi envolvido.</div></div>
      </div>

      <h3>Boas práticas</h3>
      <ul class="rule-list">
        <li><span class="rule-num">→</span> Consulte o indivíduo antes de qualquer abordagem — saber os antecedentes aumenta a segurança</li>
        <li><span class="rule-num">→</span> Consulte pela placa do veículo para verificar pendências ou registros de roubo</li>
        <li><span class="rule-num">→</span> Use junto com os boletins — consulte o suspeito antes de criar o relato</li>
      </ul>

      <!-- Módulo 09 -->
      <h2>09 — Código Penal</h2>
      <p>A aba <strong>Código Penal</strong> é sua referência legal dentro do tablet. Está dividida em duas seções que você deve conhecer de cabeça para enquadrar corretamente os crimes nas ocorrências.</p>

      <h3>🔴 Crimes e Penas</h3>
      <table class="q-table">
        <thead>
          <tr><th>#</th><th>Crime / Infração</th><th>Pena (meses)</th><th>Multa</th></tr>
        </thead>
        <tbody>
          <tr><td class="q-code">01</td><td class="q-meaning">Desobediência</td><td>15</td><td>\$2.000</td></tr>
          <tr><td class="q-code">02</td><td class="q-meaning">Porte de arma ilegal</td><td>30</td><td>\$3.000</td></tr>
          <tr><td class="q-code">03</td><td class="q-meaning">Corrida ilegal</td><td>30</td><td>\$5.000</td></tr>
          <tr><td class="q-code">04</td><td class="q-meaning">Roubo de Departamento</td><td>35</td><td>\$10.000</td></tr>
          <tr><td class="q-code">05</td><td class="q-meaning">Venda de drogas</td><td>25</td><td>\$8.000</td></tr>
          <tr><td class="q-code">06</td><td class="q-meaning">Dinheiro ilícito</td><td>20</td><td>\$5.000</td></tr>
          <tr><td class="q-code">07</td><td class="q-meaning">Roubo de veículo</td><td>25</td><td>\$6.000</td></tr>
          <tr><td class="q-code">08</td><td class="q-meaning">Roubo a Ammunition</td><td>30</td><td>\$7.000</td></tr>
          <tr><td class="q-code">09</td><td class="q-meaning">Porte de Entorpecentes</td><td>15</td><td>\$1.000</td></tr>
        </tbody>
      </table>

      <h3>🟡 Código de Trânsito</h3>
      <table class="q-table">
        <thead>
          <tr><th>#</th><th>Infração</th><th>Multa</th></tr>
        </thead>
        <tbody>
          <tr><td class="q-code">01</td><td class="q-meaning">Excesso de velocidade</td><td>\$700</td></tr>
          <tr><td class="q-code">02</td><td class="q-meaning">Estacionado em local proibido</td><td>\$300</td></tr>
          <tr><td class="q-code">03</td><td class="q-meaning">Dirigir sem cinto de segurança</td><td>\$200</td></tr>
          <tr><td class="q-code">04</td><td class="q-meaning">Dirigir Alcoolizado</td><td>\$2.000</td></tr>
          <tr><td class="q-code">05</td><td class="q-meaning">Alteração de Características do Veículo</td><td>\$500</td></tr>
          <tr><td class="q-code">06</td><td class="q-meaning">Veículo com placa adulterada</td><td>\$500</td></tr>
          <tr><td class="q-code">07</td><td class="q-meaning">Veículo com débitos vencidos</td><td>\$500</td></tr>
          <tr><td class="q-code">08</td><td class="q-meaning">Veículo Danificado para Trafegar</td><td>\$500</td></tr>
          <tr><td class="q-code">09</td><td class="q-meaning">Dirigir na Contra Mão</td><td>\$300</td></tr>
        </tbody>
      </table>

      <div class="callout">
        <span class="callout-icon">💡</span>
        <div>Use o campo <strong>Pesquisar artigo</strong> no canto superior direito do tablet para localizar um crime rapidamente durante uma abordagem.</div>
      </div>

      <!-- Módulo 10 -->
      <h2>10 — Veículos Apreendidos</h2>
      <p>A aba <strong>Veículos</strong> centraliza o controle de todos os veículos apreendidos pela corporação. Cada card exibe as informações completas do veículo retido.</p>

      <div class="def-list">
        <div class="def-item"><div class="def-term">🚗 MODELO E PLACA</div><div class="def-desc">Nome do modelo do veículo e placa de identificação.</div></div>
        <div class="def-item"><div class="def-term">👤 PROPRIETÁRIO</div><div class="def-desc">Nome do dono registrado no sistema da cidade.</div></div>
        <div class="def-item"><div class="def-term">💰 VALOR / TAXA</div><div class="def-desc">Valor cobrado para liberação (pode ser \$0 dependendo do caso).</div></div>
        <div class="def-item"><div class="def-term">🔴 APREENDIDO → 🟡 LIBERADO</div><div class="def-desc">Apreendido = veículo retido pela PM, ainda não liberado. Liberado = disponível para retirada pelo proprietário.</div></div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin: 16px 0;">
        <div class="callout" style="margin:0;">
          <span class="callout-icon">🔒</span>
          <div><strong>Apreender Veículo</strong><br>Clique em <strong>+ Apreender Veículo</strong> no canto superior direito. Informe a placa e dados do veículo para registrar a apreensão no sistema.</div>
        </div>
        <div class="callout success" style="margin:0;">
          <span class="callout-icon">🔓</span>
          <div><strong>Liberar Veículo</strong><br>Clique em <strong>Liberar Veículo</strong> no card correspondente. O proprietário é notificado e pode retirar o veículo.</div>
        </div>
      </div>

      <div class="callout warn">
        <span class="callout-icon">⚠️</span>
        <div>Apreenda o veículo somente após confirmar que ele está vinculado a uma infração ou crime registrado em boletim. Nunca apreenda sem fundamentação legal.</div>
      </div>

      <!-- Módulo 11 -->
      <h2>11 — Área Vermelha</h2>
      <p>A <strong>Área Vermelha</strong> é a última aba do tablet e uma das mais poderosas — permite criar zonas de bloqueio no mapa que afetam todos os jogadores da cidade. Use com responsabilidade.</p>

      <div class="callout danger">
        <span class="callout-icon">🔒</span>
        <div><strong>Acesso Restrito</strong> — Nem todo oficial tem acesso a esta aba. O desbloqueio ocorre conforme você progride na carreira e recebe autorização do alto comando.</div>
      </div>

      <h3>Como criar uma Área Vermelha</h3>
      <ul class="rule-list">
        <li><span class="rule-num">01</span> Defina o <strong>Raio da zona</strong> — slider de 50m (esquina) a 500m (bairro). A zona é criada centrada na sua posição atual no mapa.</li>
        <li><span class="rule-num">02</span> Escreva a <strong>Mensagem de Aviso</strong> — o motivo da área vermelha. NÃO coloque "DEPARTAMENTO DE POLICIA — AREA VERMELHA" no início: esse cabeçalho é adicionado automaticamente.</li>
        <li><span class="rule-num">03</span> Clique em <strong>Criar Área Vermelha</strong> — um círculo vermelho aparece no mapa para TODOS os jogadores e a mensagem é enviada como notificação global.</li>
      </ul>

      <div class="def-list">
        <div class="def-item"><div class="def-term">🗺 CÍRCULO NO MAPA</div><div class="def-desc">A zona vermelha aparece visivelmente no mapa de todos os jogadores da cidade.</div></div>
        <div class="def-item"><div class="def-term">📢 NOTIFICAÇÃO GLOBAL</div><div class="def-desc">Todos os jogadores recebem a mensagem de aviso instantaneamente, sem exceção.</div></div>
        <div class="def-item"><div class="def-term">📍 MÚLTIPLAS ZONAS</div><div class="def-desc">É possível criar mais de uma zona ativa simultaneamente em locais diferentes.</div></div>
        <div class="def-item"><div class="def-term">🗑 REMOVER ZONA</div><div class="def-desc">Clique no botão de lixeira na zona específica para removê-la após o encerramento da operação.</div></div>
      </div>

      <h3>Boas práticas</h3>
      <ul class="rule-list">
        <li><span class="rule-num">✅</span> Use em operações de grande porte: perseguições, tiroteios, bloqueios de via, cercos táticos</li>
        <li><span class="rule-num">✅</span> A Área Vermelha serve para que civis não se aproximem e não coloquem suas vidas em risco</li>
        <li><span class="rule-num">⚠️</span> Remova a zona ao encerrar a operação — zonas ativas desnecessariamente atrapalham civis</li>
        <li><span class="rule-num">⚠️</span> Não abuse da ferramenta para brincadeiras — uso indevido é punível pelo alto comando</li>
      </ul>

      <div class="callout success">
        <span class="callout-icon">⭐</span>
        <div><strong>Curso Concluído!</strong> Você está preparado para usar todas as ferramentas do tablet com profissionalismo. Bom serviço, oficial!</div>
      </div>`},
  cursoAcomp:{title:'Curso de Acompanhamento',group:'CURSOS',icon:'🚓',eyebrow:'Curso',lead:'Treinamento sobre coordenação e comunicação durante acompanhamentos.',html:`<div class="def-item">
          <div class="def-term">COLISÕES FORA DO ACOMPANHAMENTO</div>
          <div class="def-desc">Como policial, é obrigação auxiliar e arcar com custos caso haja dano material.</div>
        </div>
        <div class="def-item">
          <div class="def-term">VELOCIDADE EM CÓDIGO 0</div>
          <div class="def-desc">Seja responsável no patrulhamento. Tenha cuidado com a velocidade da viatura para evitar acidentes.</div>
        </div>
      </div>

      <h2>Tipos de Acompanhamento</h2>
      <div class="vehicle-cards">
        <div class="vehicle-card primary">
          <span class="v-label">PRIMÁRIA</span>
          <div class="v-body">Responsável por todo o acompanhamento. Primeiro visual da QRU, modulação e informações relevantes para decisão. Permanece no visual, realiza o mesmo traçado do indivíduo, domínio do GPS e comunicação de direções.</div>
        </div>
        <div class="vehicle-card secondary">
          <span class="v-label">SECUNDÁRIA</span>
          <div class="v-body">Manter-se próxima à primária e assumir a QRU se necessário. Realiza adiantamentos curtos e auxilia a terciária em becos. Faz cercos em becos estreitos sem atrapalhar a posição principal.</div>
        </div>
        <div class="vehicle-card tertiary">
          <span class="v-label">TERCIÁRIA</span>
          <div class="v-body">Principal responsável pelo CERCO e apoios. Utiliza cerco, antecipações e adiantamentos. Em acidente envolvendo civis na QRU, anuncia BREVE QTA e presta apoio. Deve antecipar traçados que o acompanhado fará.</div>
        </div>
      </div>

      <h2>Progressão de Força no Acompanhamento</h2>
      <p>Progride conforme atitudes do acompanhado, a partir do momento que não haja mais fuga limpa:</p>
      <div class="def-list">
        <div class="def-item">
          <div class="def-term">A — Interferência automobilística</div>
          <div class="def-desc">Dar PIT, bater de propósito → utilizar PIT e BOX.</div>
        </div>
        <div class="def-item">
          <div class="def-term">B — Interferência com resgate ou falta de preservação sem intenção</div>
          <div class="def-desc">Utilizar PIT, BOX e SPIKE.</div>
        </div>
        <div class="def-item">
          <div class="def-term">C — Resgate pela segunda vez ou falta de preservação com intenção</div>
          <div class="def-desc">Utilizar PIT, BOX, SPIKE.</div>
        </div>
        <div class="def-item">
          <div class="def-term">D — Falta grave de preservação (jogar na água, atirar contra polícia)</div>
          <div class="def-desc">Utilizado CÓDIGO 5 no INDIVÍDUO.</div>
        </div>
      </div>

      <h2>Técnicas de Progressão Veicular</h2>
      <div class="def-list">
        <div class="def-item">
          <div class="def-term">PIT</div>
          <div class="def-desc">Manobra exclusiva do INTERCEPTOR. Utiliza o vácuo/vento forçando a frente da viatura sem encostar no para-choque traseiro. Objetivo: desabilitar o veículo fazendo-o perder o controle. Limite de 180 km/h.</div>
        </div>
        <div class="def-item">
          <div class="def-term">SPIKE</div>
          <div class="def-desc">Tira de ferrões para furar pneus. Requer rapidez e posicionamento estratégico. Liberação apenas para GTM e INTERCEPTOR. A terciária é responsável pela aplicação se não houver unidade adicional.</div>
        </div>
        <div class="def-item">
          <div class="def-term">BOX</div>
          <div class="def-desc">Bloqueio em volta do veículo acompanhado (viatura na frente, traseira e laterais), impossibilitando movimentação. Frequentemente usado após PIT e SPIKE.</div>
        </div>
      </div>

      <h2>Fuga Aquática</h2>
      <ul class="rule-list">
        <li><span class="rule-num">→</span> Se houver indício de jogar o veículo na água, verificar progressão de força.</li>
        <li><span class="rule-num">→</span> Se entrar na água sem veículo propositalmente: solicitar que saia verbalmente (1 vez). Se não sair, neutralizar com SOCOS.</li>
      </ul>

      <h2>Acompanhamento a Pé</h2>
      <p>Quando iniciado por stall/capotamento ou veículo inoperante, usa-se a "CABEÇADA" para derrubar o indivíduo. Ao cair, informar QRA e verbalizar algema. Se não conseguir algemar, continue o acompanhamento a pé, mas <strong>NÃO SEGURE pelo braço</strong>.</p>

      <div class="callout warn">
        <span class="callout-icon">⚡</span>
        <div>Nunca utilize o Taser em PNEU. É permitido o uso mesmo se o indivíduo estiver molhado.</div>
      </div>

      <h2>Como Mudar a Classe da QSV</h2>
      <div class="callout">
        <span class="callout-icon">🚗</span>
        <div>É obrigatório a mudança de classe da viatura utilizando a tecla <strong>"G"</strong> para a mesma classe do veículo a ser acompanhado!</div>
      </div>`},
  boosting:{title:'Boosting',group:'CURSOS',icon:'🚘',eyebrow:'Curso',lead:'Módulo específico para procedimentos relacionados a operações de boosting.',html:`<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div>Última atualização: 02/09/2026 as 22:02</div>
</div>

<h2>I. DIRETRIZES TÁTICAS GERAIS</h2>
<ul class="rule-list">
  <li><span class="rule-num">▪</span> <strong>Prioridade Absoluta:</strong> O veículo principal é o foco primário de toda a operação. Caso inoperante e haja fuga a pé, a prioridade permanece na captura do suspeito principal, mesmo que isso exija descontinuar a perseguição aos apoios.</li>
  <li><span class="rule-num">▪</span> <strong>Deslocamento Inicial:</strong> Três viaturas devem deslocar-se imediatamente ao veículo interceptado para iniciar o acompanhamento. As demais unidades permanecem em QRV, aguardando solicitação conforme a classe do procedimento.</li>
  <li><span class="rule-num">▪</span> <strong>Contenção de Apoios:</strong> Confirmado o apoio aos suspeitos, a viatura terciária deve conter o veículo de apoio. Com a chegada de reforço, a unidade retorna ao acompanhamento principal assumindo funções de adiantamento e cerco.</li>
  <li><span class="rule-num">▪</span> <strong>Objetivo Tático:</strong> Impedir que o veículo de apoio realize reparos, abastecimento ou qualquer ação que favoreça a continuidade da fuga e/ou realização de um próximo apoio ao veículo principal.</li>
  <li><span class="rule-num">▪</span> <strong>Identificação da Ocorrência:</strong> Ao chegar no QTH da ocorrência e avistar indivíduos arrombando o veículo principal (armados com pistolas ou armas brancas), americanos mortos ao chão caracterizam-se as ocorrências como boosting.</li>
</ul>

<h2>II. CLASSIFICAÇÃO DE OPERAÇÕES</h2>
<ul class="rule-list">
  <li><span class="rule-num">▪</span> <strong>Classe B ou Inferior:</strong> Acompanhamento por 3 unidades padrão e 6 em QRV. Limite de 3 viaturas por veículo de apoio sendo eles classe S (máximo de 9 viaturas de apoio). Proibida a participação do G.R.A. no acompanhamento principal.</li>
  <li><span class="rule-num">▪</span> <strong>Classe A:</strong> Acompanhamento por 3 unidades padrão e 6 em QRV. Limite de 3 viaturas por apoio sendo eles classe S (máximo de 9 de apoio). Autorizada a atuação do G.S.A., exceto se o veículo de apoio for de Classe B ou inferior.</li>
  <li><span class="rule-num">▪</span> <strong>Classe S:</strong> Acompanhamento por 3 unidades padrão e 6 em QRV. Permitidas 3 viaturas por veículo de apoio (máximo de 9 de apoio). Presença obrigatória do G.S.A., liberado para atuar em qualquer apoio independentemente da classe.</li>
</ul>

<h2>III. PROTOCOLOS DE INTERVENÇÃO (PIT, BOX E SPIKE)</h2>
<ul class="rule-list">
  <li><span class="rule-num">▪</span> <strong>Aplicação de PIT:</strong> Permitido apenas até a velocidade máxima de 150 KM/H, com intervalo mínimo de 30 segundos entre tentativas. O objetivo é desestabilizar a trajetória, sendo estritamente proibido causar STALL proposital ou aplicar em áreas movimentadas e becos.</li>
  <li><span class="rule-num">▪</span> <strong>Uso de SPIKE:</strong> Liberado contra apoios de Classe A ou S após confirmação de COD 4/COD 6 ou resgate. Uso exclusivo da unidade SPEED (ou se autorizado pelo Alto Comando). Proibido transportar no inventário pessoal.</li>
</ul>

<h2>IV. PROTOCOLOS PARA SITUAÇÕES ADVERSAS</h2>
<ul class="rule-list">
  <li><span class="rule-num">▪</span> <strong>Reabastecimento e Reparo:</strong> Autorizado a todos os oficiais (incluindo G.S.A.) no momento em que o veículo principal for flagrado abastecendo, reparando ou com a chegada confirmada dos apoios.</li>
  <li><span class="rule-num">▪</span> <strong>Incapacitação de Unidade:</strong> Em caso de desacordamento, explosão ou queda do veículo em meio aquático, declara-se QTA absoluto, sendo vedado o retorno à ocorrência.</li>
  <li><span class="rule-num">▪</span> <strong>Veículo Inoperante (4 Stalls):</strong> Persistindo a recusa de desembarque dos ocupantes, deve-se verbalizar a ordem por 3 vezes. Permanecendo o descumprimento, autoriza-se o uso do taser para extração.</li>
  <li><span class="rule-num">▪</span> <strong>Capotamento:</strong> Os oficiais devem estabelecer cerco imediato ao redor do veículo. As unidades de apoio devem se posicionar estrategicamente para evitar intervenções externas.</li>
</ul>

<h2>V. PROTOCOLO DE APREENSÃO E REGISTRO</h2>
<ul class="rule-list">
  <li><span class="rule-num">▪</span> <strong>Local de Apreensão:</strong> A apreensão do veículo principal deve ser efetuada exclusivamente na lateral da DP-G. Em caso de 4 stalls, utilize o kit de reparo para remover 1 stall e efetue a escolta até o local.</li>
  <li><span class="rule-num">▪</span> <strong>Registro Fotográfico:</strong> O oficial responsável pela prisão no pátio deve realizar o registro fotográfico no local e compartilhá-lo com a equipe envolvida. Os demais oficiais mantêm vigilância ativa contra possíveis tentativas de resgate.</li>
</ul>`},
  ruas:{title:'Ruas e Referências',group:'CURSOS',icon:'🗺️',eyebrow:'Referência',lead:'Material de apoio para localização e comunicação de pontos de referência.',html:``},
  cursoAb:{title:'Curso de Abordagem',group:'CURSOS',icon:'🤝',eyebrow:'Curso',lead:'Treinamento para execução padronizada de abordagens.',html:`<h2>Estrutura da Abordagem</h2>
      <div class="def-list">
        <div class="def-item"><div class="def-term">1 — QSV</div><div class="def-desc">Luminoso e sonoro sempre ligados!</div></div>
        <div class="def-item"><div class="def-term">2 — ORDEM DE PARADA</div><div class="def-desc">"Cidadão, encoste o veículo a direita." / "Desligue o veículo." / "Abaixe os vidros." / "Mantenha as mãos no volante, onde eu possa ver." / "Não utilize nenhum meio de comunicação durante a abordagem."</div></div>
        <div class="def-item"><div class="def-term">3 — MODULAÇÃO INICIAL</div><div class="def-desc">"QAP Central, Unidade 600 iniciando abordagem de COD 2, QRU de suspeita de tráfico de drogas, a um JUGULAR preto, tripulado X2, QTH praça na Strawberry Avenue. Solicito QRR de mais 2 unidades."</div></div>
        <div class="def-item"><div class="def-term">4 — ABORDAGEM (após QRR)</div><div class="def-desc">"Cidadão, desça do veículo com as mãos para cima." / Pode colocar as mãos para trás e ir até a calçada para conversar.</div></div>
        <div class="def-item"><div class="def-term">5 — APRESENTAÇÃO</div><div class="def-desc">"Boa tarde, sou a Sgt. Harley Ventura, qual o seu nome?" — Verifique se o indivíduo possui PENDÊNCIAS, se está PROCURADO e se o PROPRIETÁRIO DO VEÍCULO está correto.</div></div>
        <div class="def-item"><div class="def-term">6 — MOTIVO DA ABORDAGEM</div><div class="def-desc">Explique o motivo. Questione de onde o cidadão estava vindo, para onde ia. Se a história for boa, libere. Caso contrário, um Soldado+ poderá fazer o teste residual. Se positivo, conduza à prisão.</div></div>
        <div class="def-item"><div class="def-term">7 — LIBERAÇÃO</div><div class="def-desc">"Como está tudo certo com suas documentações e a sua história parece coerente, vamos te liberar. Assim que desligarmos o luminoso o Sr. Poderá se retirar do local. Agradecemos a contribuição e disponha sempre da polícia militar."</div></div>
        <div class="def-item"><div class="def-term">8 — MODULAÇÃO FINAL</div><div class="def-desc">"QAP Central, COD 4 na abordagem de COD 2, QRU suspeita de tráfico de drogas, ao JUGULAR preto na Strawberry Avenue. TKS a todas as unidades."</div></div>
      </div>

      <h2>Abordagem em Setores Legais (Hospital/Mecânica)</h2>
      <p>O policial SEMPRE priorizará tratar das situações do lado de <strong>FORA DO ESTABELECIMENTO</strong>. Caso o indivíduo não coopere, a abordagem e procedimentos policiais serão feitos ali mesmo, sempre mantendo postura e agilidade.</p>

      <h2>Testes Residuais de Pólvora</h2>
      <div class="def-list">
        <div class="def-item">
          <div class="def-term">TESTE RESIDUAL</div>
          <div class="def-desc">Utilizado para detectar explosivos (C4), manuseio ou consumo de drogas e uso de Lockpick.</div>
        </div>
        <div class="def-item">
          <div class="def-term">TESTE DE PÓLVORA</div>
          <div class="def-desc">Utilizado quando há suspeita de disparo de arma de fogo.</div>
        </div>
      </div>

      <div class="callout warn">
        <span class="callout-icon">⚠️</span>
        <div>Caso a central informe uma QRU específica (ex: Tráfico de Drogas), apenas o teste relacionado à natureza da ocorrência deverá ser considerado para fins legais. Deve haver resultado positivo diretamente ligado à QRU principal.</div>
      </div>

      <h2>Itens na Revista</h2>
      <div class="def-list">
        <div class="def-item">
          <div class="def-term">RETIRAMOS SEMPRE</div>
          <div class="def-desc">Lockpick, drogas, colete, dinheiro ilícito, algema, armamento, munição, capuz, adrenalina, C4, itens roubados (porta-malas), missão, Chip Ilegal (retirar tablet, coletar chip, devolver tablet).</div>
        </div>
        <div class="def-item">
          <div class="def-term">RETIRAMOS SE USADOS NO CRIME</div>
          <div class="def-desc">Corda (para resgate), armas brancas (taco, lanterna, chave de grifo, pé de cabra). Certifique-se que foram usados para crimes ilegais.</div>
        </div>
        <div class="def-item">
          <div class="def-term">NÃO RETIRAMOS</div>
          <div class="def-desc">Rádio e celular (sem sinal na prisão), energético, bandagem, kit reparo e galão de gasolina.</div>
        </div>
        <div class="def-item">
          <div class="def-term">REVISTA VEICULAR</div>
          <div class="def-desc">Em qualquer QRU que envolva um veículo (carro, moto, helicóptero), está autorizada a revista veicular COMPLETA (porta-luvas e porta-malas).</div>
        </div>
      </div>`}
};

const navGroups=[
 ['INTRODUÇÃO',[['home','Manual de Conduta','▤'],['regulamento','Regulamento Básico','▤']]],
 ['ORGANIZAÇÃO',[['hierarquia','Hierarquia Militar','🎖️'],['upf','Conduta Militar (UPF)','⚡']]],
 ['OPERAÇÕES',[['comunicacao','Comunicação','📡'],['codigos','Códigos Q','▣'],['acompanhamento','Acompanhamento','🚓'],['revista','Revista','🔎'],['abordagem','Abordagem','🤝'],['cod5','Comportamento em CÓD.5','🔴']]],
 ['INFRAÇÕES',[['infracoes','Infrações e Definições','⚖️']]],
 ['CURSOS',[['cursoCom','Comunicação Operacional','📡'],['modulacao','Modulação e Anúncios','🎙️'],['tablet','Curso de Tablet','📱'],['cursoAcomp','Curso de Acompanhamento','🚓'],['boosting','Boosting','🚘'],['ruas','Ruas e Referências','🗺️'],['cursoAb','Curso de Abordagem','🤝']]]
];
const nav=document.getElementById('nav');
nav.innerHTML=navGroups.map(([g,items])=>`<div class="nav-group"><div class="nav-title">${g}</div>${items.map(([id,label,icon])=>`<div class="nav-item" data-go="${id}"><span class="nav-icon">${icon}</span><span>${label}</span></div>`).join('')}</div>`).join('');

let current='home';
function render(id, push=true){const p=pages[id]||pages.home;current=id;document.title=`1º BPM HARDLINE — ${p.title}`;document.getElementById('crumb').textContent=p.title;document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.go===id));
 const ids=Object.keys(pages),i=ids.indexOf(id),prev=ids[(i-1+ids.length)%ids.length],next=ids[(i+1)%ids.length];
 document.getElementById('content').innerHTML=`<div class="eyebrow ${p.eyebrow==='Documento Oficial'?'':'blue'}">${p.icon} &nbsp; ${p.eyebrow}</div><h1>${p.title}</h1><p class="lead">${p.lead}</p><div class="rule"></div>${p.html}<div class="pager"><button data-go="${prev}">← Anterior</button><button data-go="${next}">Próximo →</button></div>`;
 if(push) history.pushState({id},'',`#${id}`);window.scrollTo({top:0,behavior:'smooth'});document.getElementById('sidebar').classList.remove('open');
}

document.addEventListener('click',e=>{const el=e.target.closest('[data-go]');if(el)render(el.dataset.go);});
window.addEventListener('popstate',()=>render(location.hash.slice(1)||'home',false));
const initial=location.hash.slice(1);render(pages[initial]?initial:'home',false);

document.getElementById('mobileMenu').onclick=()=>document.getElementById('sidebar').classList.toggle('open');
const modal=document.getElementById('searchModal'), input=document.getElementById('modalSearch'), results=document.getElementById('results');
function openSearch(){modal.classList.remove('hidden');input.value=document.getElementById('searchInput').value;input.focus();doSearch();}
function doSearch(){const q=input.value.toLowerCase().trim();if(!q){results.innerHTML='<div class="no-results">Digite um termo para pesquisar.</div>';return}const found=Object.entries(pages).filter(([id,p])=>(p.title+' '+p.group+' '+p.lead+' '+p.html.replace(/<[^>]+>/g,' ')).toLowerCase().includes(q));results.innerHTML=found.length?found.map(([id,p])=>`<div class="result" data-go="${id}"><b>${p.title}</b><span>${p.group} · ${p.lead.slice(0,100)}...</span></div>`).join(''):'<div class="no-results">Nenhum resultado encontrado.</div>';}
document.getElementById('searchInput').addEventListener('focus',openSearch);document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')openSearch()});input.addEventListener('input',doSearch);document.getElementById('closeSearch').onclick=()=>modal.classList.add('hidden');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}if(e.key==='Escape')modal.classList.add('hidden')});
