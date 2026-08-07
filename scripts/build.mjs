/* Luz e Axé — gerador das páginas estáticas
 *
 * Lê docs/assets/data/reflexoes.js e escreve o HTML com o texto já embutido,
 * para que o site seja legível e indexável sem depender de JavaScript.
 * Só o devocional renderiza no cliente, porque depende da data corrente.
 *
 *   node scripts/build.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(raiz, 'docs');

const janela = {};
new Function('window', readFileSync(join(docs, 'assets/data/reflexoes.js'), 'utf8'))(janela);
const D = janela.LUZEAXE;

const SITE = 'https://luzeaxe.com.br';
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Marca abstrata: círculos concêntricos e uma raiz. Sem símbolo sagrado. */
const SELO = `<svg class="selo-marca" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
  <circle cx="24" cy="20" r="13"/><circle cx="24" cy="20" r="7.5"/>
  <circle class="nucleo" cx="24" cy="20" r="2.6"/>
  <path d="M24 33 V42 M24 37 C20 38 18 40 17 43 M24 37 C28 38 30 40 31 43"/>
</svg>`;

const MENU = [
  ['index.html', 'Início'],
  ['devocional.html', 'Meditação do dia'],
  ['principios.html', 'Princípios'],
  ['tradicoes.html', 'Tradições'],
  ['orixas.html', 'Cosmologia'],
  ['conceitos.html', 'Conceitos'],
  ['vozes.html', 'Vozes'],
  ['metodo-editorial.html', 'Método'],
  ['fontes.html', 'Fontes']
];

function pagina({ arquivo, titulo, descricao, corpo, devocional = false, indexavel = true }) {
  const menu = MENU.map(([href, rot]) =>
    `<a href="${href}"${href === arquivo ? ' aria-current="page"' : ''}>${rot}</a>`
  ).join('\n        ');

  return `<!doctype html>
<html lang="pt-BR" data-tema="escuro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta name="author" content="Dr. Eduardo D'Angelo Mimessi">
<meta name="theme-color" content="#0e1730">
${indexavel ? `<link rel="canonical" href="${SITE}/${arquivo === 'index.html' ? '' : arquivo}">` : '<meta name="robots" content="noindex">'}
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Luz e Axé">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<link rel="manifest" href="manifest.webmanifest">
<link rel="stylesheet" href="assets/css/site.css">
</head>
<body>
<a class="pular" href="#conteudo">Ir para o conteúdo</a>

<div class="tarja">
  <strong>Versão preliminar em revisão.</strong> Site educativo, não iniciático. Não substitui terreiro, comunidade ou orientação religiosa, nem assistência médica ou psicológica.
</div>

<header class="topo">
  <div class="envolt topo-linha">
    <a class="marca" href="index.html">
      ${SELO}
      <span><b>Luz e Axé</b><span>Matriz iorubá e tradições afro-brasileiras</span></span>
    </a>
    <nav class="menu" aria-label="Principal">
        ${menu}
      <button class="tema" type="button" aria-label="Alternar tema">◐</button>
    </nav>
  </div>
</header>

<main id="conteudo">
${corpo}

  <div class="envolt" style="padding-bottom:3rem">
    <div class="nota-cuidado">
      <strong>Nota de cuidado</strong>
      <p>${esc(D.NOTA_CUIDADO.longa)}</p>
    </div>
  </div>
</main>

<footer class="rodape">
  <div class="envolt">
    <div class="rodape-grade">
      <div>
        <h4>Percorrer</h4>
        <a href="devocional.html">Meditação do dia</a>
        <a href="principios.html">Os cinco princípios</a>
        <a href="tradicoes.html">Tradições</a>
        <a href="orixas.html">Cosmologia</a>
      </div>
      <div>
        <h4>Compromisso</h4>
        <a href="metodo-editorial.html">Método editorial</a>
        <a href="fontes.html">Fontes e créditos</a>
        <a href="vozes.html">Vozes e racismo religioso</a>
        <a href="autor.html">Sobre o autor</a>
      </div>
      <div>
        <h4>Projeto</h4>
        <a href="https://vidaesentido.com.br" rel="noopener">Projeto Vida e Sentido</a>
        <a href="https://github.com/edumimessi/luzeaxe" rel="noopener">Código no GitHub</a>
      </div>
    </div>
    <div class="legal">
      <p>Site educativo. Apresenta conceitos publicados em literatura acadêmica e em obras de autoria de pessoas das próprias tradições. Não transmite fundamento, segredo iniciático ou liturgia, e não substitui terreiro, comunidade ou orientação de lideranças religiosas.</p>
      <p>${esc(D.NOTA_CUIDADO.curta)}</p>
      <p>© <span id="ano">2026</span> Dr. Eduardo D'Angelo Mimessi. Concebido e curado editorialmente pelo autor, desenvolvido com apoio de ferramentas digitais.</p>
    </div>
  </div>
</footer>
<script src="assets/js/app.js"></script>
${devocional ? '<script src="assets/data/reflexoes.js"></script>\n<script src="assets/js/devocional.js"></script>' : ''}
</body>
</html>
`;
}

const paginas = [];

/* ---------------- início ---------------- */
paginas.push({
  arquivo: 'index.html',
  titulo: 'Luz e Axé — Matriz iorubá e tradições afro-brasileiras',
  descricao: 'Ancestralidade, axé, comunidade, corporeidade e circularidade a partir da matriz iorubá do Candomblé Ketu, com fontes nomeadas e distinção explícita entre tradição e reflexão autoral.',
  corpo: `
  <div class="envolt hero">
    <h1>Ancestralidade, axé e <em>sentido</em></h1>
    <p class="sub">Um espaço em português sobre as tradições afro-brasileiras e a busca de sentido. Cada bloco de texto diz de qual tradição fala, qual obra o sustenta e se é síntese educativa ou reflexão do autor — para que interpretação nunca seja confundida com doutrina.</p>
    <div class="acoes">
      <a class="botao cheio" href="devocional.html">Ler a meditação de hoje</a>
      <a class="botao" href="metodo-editorial.html">Como este site é escrito</a>
    </div>
  </div>

  <section class="envolt">
    <span class="olho">Antes de tudo</span>
    <h2>${esc(D.RECORTE.titulo)}</h2>
    ${D.RECORTE.paragrafos.map((p) => `<p class="sub">${esc(p)}</p>`).join('\n    ')}
    <p style="margin-top:1rem"><a href="tradicoes.html">Ver quais tradições existem e como se distinguem →</a></p>
  </section>

  <section class="envolt">
    <span class="olho">Os cinco princípios</span>
    <h2>Cinco fios de leitura</h2>
    <p class="sub">Síntese educativa introdutória. Formulações variam entre nações e casas; nenhuma delas é doutrina apresentada por este site.</p>
    <div class="grade g3" style="margin-top:1.6rem">
      ${D.PRINCIPIOS.map((p, i) => `<article class="cartao">
        <span class="num">0${i + 1}</span>
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.resumo)}</p>
      </article>`).join('\n      ')}
    </div>
    <p style="margin-top:1.4rem"><a href="principios.html">Ler cada princípio em detalhe →</a></p>
  </section>

  <section class="envolt">
    <span class="olho">Compromisso</span>
    <h2>O que este site não faz</h2>
    <div class="grade g2" style="margin-top:1.4rem">
      <article class="cartao"><h3>Não é iniciático</h3><p>Fundamento, segredo, feitura e liturgia interna não são tratados aqui — nem deveriam ser, por quem não é iniciado.</p></article>
      <article class="cartao"><h3>Não prescreve nada</h3><p>Não há exercícios, tarefas nem instrução ritual. As leituras terminam em proposições e perguntas abertas, que cada pessoa responde como quiser — ou não responde.</p></article>
      <article class="cartao"><h3>Não trata nem cura</h3><p>Nada aqui é terapia. Água, plantas, música e natureza aparecem como experiência cultural, jamais como recurso clínico.</p></article>
      <article class="cartao"><h3>Não lê sofrimento como sinal</h3><p>Adoecimento e perda não são interpretados como castigo, desequilíbrio espiritual ou afastamento do próprio destino.</p></article>
      <article class="cartao"><h3>Não funde tradições</h3><p>Semelhanças são apontadas como semelhanças. Nada de "é tudo a mesma coisa".</p></article>
      <article class="cartao"><h3>Não cita sem fonte</h3><p>Sem "provérbio africano" genérico. Cada síntese indica a obra que a sustenta.</p></article>
    </div>
  </section>`
});

/* ---------------- devocional ---------------- */
paginas.push({
  arquivo: 'devocional.html',
  devocional: true,
  titulo: 'Meditação do dia — Luz e Axé',
  descricao: 'Uma leitura por dia: termo da tradição com fonte, síntese educativa, reflexão autoral, diálogo existencial proposto pelo autor e uma aplicação para o dia.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Meditação do dia</span>
    <h1>Uma leitura por dia</h1>
    <p class="sub">Cada leitura segue sempre a mesma ordem: termo da tradição com língua de origem, contexto com a obra que o sustenta, reflexão do autor, diálogo existencial proposto pelo autor e uma pergunta aberta. Os selos deixam explícito onde termina a tradição e começa a interpretação.</p>
    <p class="sub">Não há exercício a cumprir nem resposta esperada. Uma leitura por dia, e o que ela mover é assunto de quem lê.</p>
    <p class="origem" style="margin-top:1rem">Ciclo previsto: 366 leituras. Publicadas: ${D.MEDITACOES.length}. Todas são <strong>reflexões autorais</strong> a partir das obras listadas em Fontes.</p>
    <p id="aviso-ciclo" class="nota-cuidado" hidden><strong>Acervo em construção.</strong> Enquanto as 366 leituras não estiverem escritas e revisadas, a seleção diária percorre o acervo preliminar e pode reaparecer. Ela não é apresentada como calendário anual completo.</p>
  </div>

  <section class="envolt" style="border-top:0;padding-top:0">
    <div class="leitor" id="leitor"><p>Carregando a leitura de hoje…</p></div>
    <div class="navega">
      <button type="button" id="anterior">← Anterior</button>
      <button type="button" id="hoje">Hoje <span id="posicao"></span></button>
      <button type="button" id="proxima">Próxima →</button>
    </div>
  </section>`
});

/* ---------------- princípios ---------------- */
paginas.push({
  arquivo: 'principios.html',
  titulo: 'Os cinco princípios — Luz e Axé',
  descricao: 'Ancestralidade, axé, comunidade (egbé), corporeidade e circularidade, com indicação da matriz de cada formulação e separação explícita entre Candomblé e Umbanda.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Fundamento editorial</span>
    <h1>Os cinco princípios</h1>
    <p class="sub">Este site é a fonte nomeada destes cinco princípios. Onde eles aparecerem em outro lugar, devem vir acompanhados do crédito às tradições afro-brasileiras.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <div class="grade g2">
      ${D.PRINCIPIOS.map((p, i) => `<article class="cartao">
        <span class="num">0${i + 1}</span>
        <h3>${esc(p.nome)}</h3>
        <p><strong>${esc(p.resumo)}</strong></p>
        <span class="selo-genero sintese">Síntese educativa</span>
        <p>${esc(p.descricao)}</p>
        <p class="origem">Tradição: ${esc(p.tradicao)}</p>
      </article>`).join('\n      ')}
    </div>
  </section>
  <section class="envolt">
    <span class="olho">Correção necessária</span>
    <h2>Ancestralidade não é uma coisa só</h2>
    <div class="grade g2" style="margin-top:1.4rem">
      <article class="cartao">
        <span class="selo-genero sintese">Síntese educativa</span>
        <h3>Egun — Candomblé</h3>
        <p>No Candomblé Ketu, os ancestrais têm culto próprio, com sacerdócio, espaço e liturgia distintos do culto aos orixás. É religião de matriz africana, com língua litúrgica iorubá.</p>
        <p class="origem">Fonte: SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)</p>
      </article>
      <article class="cartao">
        <span class="selo-genero sintese">Síntese educativa</span>
        <h3>Preto-velho — Umbanda</h3>
        <p>Preto-velho é entidade da Umbanda, religião formada no Brasil no século XX, com cosmologia, organização e linguagem próprias. Não é equivalente a egun e não pertence ao Candomblé.</p>
        <p class="origem">Fonte: SILVA, Vagner Gonçalves da. Candomblé e Umbanda (2005)</p>
      </article>
      <article class="cartao">
        <span class="selo-genero alerta">Distinção necessária</span>
        <h3>Por que isso importa</h3>
        <p>Reunir egun e preto-velho sob uma explicação única de "ancestralidade" apaga a diferença entre duas religiões distintas e trata ambas como variações de um mesmo genérico. É o tipo de simplificação que este site recusa.</p>
      </article>
    </div>
  </section>`
});

/* ---------------- tradições ---------------- */
paginas.push({
  arquivo: 'tradicoes.html',
  titulo: 'Tradições afro-brasileiras — quem é quem | Luz e Axé',
  descricao: 'Candomblé Ketu, Jeje e Angola, Umbanda, Tambor de Mina, Xangô do Nordeste e Batuque: origens, línguas litúrgicas e distinções que não devem ser apagadas.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Não são um bloco só</span>
    <h1>Quem é quem</h1>
    <p class="sub">Falar em "religiões afro" como categoria única apaga séculos de histórias distintas. Cada tradição abaixo tem origem, língua litúrgica, panteão e organização próprios.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <div class="grade g2">
      ${D.TRADICOES.map((t) => `<article class="cartao">
        <h3>${esc(t.nome)}</h3>
        <p class="origem">${esc(t.origem)} · ${esc(t.lingua)}</p>
        <p>${esc(t.sagrado)}</p>
        <p class="origem"><strong>Cautela:</strong> ${esc(t.cautela)}</p>
      </article>`).join('\n      ')}
    </div>
  </section>
  <section class="envolt">
    <span class="olho">Honestidade de escopo</span>
    <h2>${esc(D.RECORTE.titulo)}</h2>
    ${D.RECORTE.paragrafos.map((p) => `<p>${esc(p)}</p>`).join('\n    ')}
  </section>
  <section class="envolt">
    <span class="olho">Cuidados</span>
    <h2>Distinções que este site não abre mão</h2>
    <div class="grade g2" style="margin-top:1.4rem">
      ${D.DISTINCOES.map((d) => `<article class="cartao">
        <span class="selo-genero alerta">Distinção necessária</span>
        <h3>${esc(d.titulo)}</h3>
        <p>${esc(d.texto)}</p>
      </article>`).join('\n      ')}
    </div>
  </section>`
});

/* ---------------- cosmologia ---------------- */
paginas.push({
  arquivo: 'orixas.html',
  titulo: 'Cosmologia do Candomblé Ketu — Luz e Axé',
  descricao: 'Apresentação introdutória da cosmologia iorubá registrada no Candomblé Ketu: Olodumare, Òrun e Aiyê, orixás, orí e ancestrais. Uma corrente, não todas.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Uma corrente, não todas</span>
    <h1>Cosmologia do Candomblé Ketu</h1>
    <p class="sub">${esc(D.COSMOLOGIA.nota)}</p>
    <p class="origem" style="margin-top:.8rem">Corrente: ${esc(D.COSMOLOGIA.corrente)} · Fonte: ${esc(D.COSMOLOGIA.fonte)}</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <div class="grade g2">
      ${D.COSMOLOGIA.itens.map((o) => `<article class="cartao">
        <span class="selo-genero sintese">Síntese educativa</span>
        <h3>${esc(o.nome)}</h3>
        <p>${esc(o.desc)}</p>
      </article>`).join('\n      ')}
    </div>
  </section>
  <section class="envolt">
    <span class="olho">Limite explícito</span>
    <h2>O que este site não afirma</h2>
    <p>${esc(D.COSMOLOGIA.naoDizemos)}</p>
    <p class="origem">Nada nesta página é fundamento. Quem deseja conhecer a tradição por dentro deve procurar uma casa e as pessoas responsáveis por ela.</p>
  </section>`
});

/* ---------------- vozes ---------------- */
paginas.push({
  arquivo: 'vozes.html',
  titulo: 'Vozes e racismo religioso — Luz e Axé',
  descricao: 'Pensamento negro brasileiro sobre as tradições de matriz africana e a história da perseguição religiosa no Brasil.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Quem pensou isso antes</span>
    <h1>Vozes</h1>
    <p class="sub">Este site não fala em nome das tradições. Quem fala com autoridade sobre elas está abaixo — pesquisadoras, pensadores e lideranças religiosas que escreveram em nome próprio.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <ul class="limpa">
      ${D.VOZES.map((v) => `<li>
        <h3>${esc(v.nome)} <span class="origem">${esc(v.anos)}</span></h3>
        <p>${esc(v.desc)}</p>
        <p class="origem">Obra de referência: ${esc(v.obra)}</p>
      </li>`).join('\n      ')}
    </ul>
  </section>
  <section class="envolt">
    <span class="olho">História que não se omite</span>
    <h2>${esc(D.RACISMO_RELIGIOSO.titulo)}</h2>
    ${D.RACISMO_RELIGIOSO.paragrafos.map((p) => `<p>${esc(p)}</p>`).join('\n    ')}
  </section>`
});

/* ---------------- método editorial ---------------- */
paginas.push({
  arquivo: 'metodo-editorial.html',
  titulo: 'Método editorial — Luz e Axé',
  descricao: 'Como este site é escrito: a ordem fixa de cada conteúdo, os selos de gênero de texto, o recorte declarado e o que fica deliberadamente de fora.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Transparência</span>
    <h1>Como este site é escrito</h1>
    <p class="sub">O risco central de um site assim é misturar, no mesmo parágrafo, ensinamento tradicional, síntese acadêmica e interpretação pessoal — e a interpretação acabar parecendo doutrina. Estas regras existem para impedir isso.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <h2>A ordem fixa de cada conteúdo</h2>
    <ul class="limpa">
      <li><h3>1. Tradição ou contexto</h3><p>De qual tradição se fala: Candomblé Ketu, Jeje, Angola, Umbanda, Tambor de Mina, Xangô do Nordeste ou Batuque. Nunca "as religiões afro".</p></li>
      <li><h3>2. Fonte</h3><p>A obra, pesquisador ou liderança que sustenta a afirmação, com autor e ano.</p></li>
      <li><h3>3. Síntese educativa</h3><p>Explicação sem pretensão de autoridade religiosa.</p></li>
      <li><h3>4. Reflexão autoral</h3><p>Interpretação do Dr. Eduardo Mimessi, marcada como tal.</p></li>
      <li><h3>5. Diálogo existencial proposto pelo autor</h3><p>Aproximação entre a leitura do autor e a busca de sentido. É proposta, não ensinamento da tradição — e a tradição não é apresentada como confirmação de teoria alguma.</p></li>
      <li><h3>6. Aplicação existencial</h3><p>Proposições e perguntas abertas para a vida comum. Nunca exercício, tarefa ou instrução ritual — o site não é caderno de práticas.</p></li>
      <li><h3>7. Nota de cuidado</h3><p>Espiritualidade não substitui assistência médica ou psicológica.</p></li>
    </ul>

    <h2 style="margin-top:2.5rem">As etiquetas</h2>
    <ul class="limpa">
      ${D.ETIQUETAS.map((e) => `<li><span class="selo-genero ${esc(e.id)}">${esc(e.nome)}</span><p>${esc(e.desc)}</p></li>`).join('\n      ')}
    </ul>

    <h2 style="margin-top:2.5rem">Quatro testes para cada afirmação</h2>
    <ul class="limpa">
      ${D.TESTES.map((t) => `<li><h3>${esc(t.nome)}</h3><p>${esc(t.p)}</p></li>`).join('\n      ')}
    </ul>
    <p class="origem">Quando duas fontes reconhecidas divergem, o site apresenta a divergência em vez de escolher uma e apagar a outra.</p>

    <h2 style="margin-top:2.5rem">Semáforo de risco editorial</h2>
    <div class="grade g3" style="margin-top:1.2rem">
      ${D.SEMAFORO.map((f) => `<article class="cartao">
        <span class="selo-genero ${f.faixa === 'vermelha' ? 'alerta' : (f.faixa === 'verde' ? 'sintese' : 'aplicacao')}">Faixa ${esc(f.faixa)}</span>
        <h3>${esc(f.publica)}</h3>
        <p>${esc(f.exemplos)}</p>
      </article>`).join('\n      ')}
    </div>

    <h2 style="margin-top:2.5rem">Frases que este site não escreve</h2>
    <p>Formulações que confundem descrição religiosa com aconselhamento clínico:</p>
    <ul class="limpa">
      ${D.NAO_DIZEMOS.saude.map((f) => `<li data-exemplo-vetado><p>&ldquo;${esc(f)}&rdquo;</p></li>`).join('\n      ')}
    </ul>
    <p style="margin-top:1.2rem">Equivalências que transformam divindades em categorias psicológicas:</p>
    <ul class="limpa">
      ${D.NAO_DIZEMOS.equivalencias.map((f) => `<li data-exemplo-vetado><p>&ldquo;${esc(f)}&rdquo;</p></li>`).join('\n      ')}
    </ul>
    <p style="margin-top:1.2rem">${esc(D.NAO_DIZEMOS.porque)}</p>

    <h2 style="margin-top:2.5rem">Quem escreve, e em que condição</h2>
    <p>O autor é médico, autor e educador. <strong>Não é sacerdote, iniciado nem autoridade religiosa</strong> de nenhuma das tradições apresentadas. Escreve a partir da literatura listada em <a href="fontes.html">Fontes</a>.</p>

    <h2 style="margin-top:2.5rem">O que fica de fora, por decisão</h2>
    <p><strong>Fundamento e segredo.</strong> Conhecimento iniciático, feitura, jogo e liturgia interna não aparecem aqui. Não é omissão: é limite de quem escreve.</p>
    <p><strong>Prescrição religiosa.</strong> O site não indica oferendas, banhos, obrigações ou qualquer ato de culto.</p>
    <p><strong>Exercícios e tarefas.</strong> Não há caderno de práticas, roteiro de dez semanas nem atividade a cumprir. Prescrever exercícios espirituais a partir de tradições alheias seria assumir uma autoridade que o autor não tem. As leituras terminam em pergunta aberta.</p>
    <p><strong>Promessa de cura.</strong> Água, plantas, música e natureza aparecem no registro cultural e contemplativo, nunca como tratamento. O site não opõe espiritualidade a cuidado profissional — as duas coisas convivem.</p>
    <p><strong>Sofrimento como sinal espiritual.</strong> Adoecimento, perda e dor não são lidos como castigo, desequilíbrio de energia ou afastamento do destino pessoal. Leituras assim culpabilizam quem sofre.</p>
    <p><strong>Fusão de tradições.</strong> Semelhanças entre matrizes distintas são declaradas como semelhanças. A correspondência histórica entre orixás e santos católicos é apresentada como história de perseguição, não como equivalência teológica.</p>
    <p><strong>Citação sem fonte.</strong> Nada de "provérbio africano" sem procedência. Toda obra citada traz autor, editora e ano.</p>
    <p><strong>Teoria como moldura.</strong> A tradição não é usada como exemplo, confirmação ou versão antiga de qualquer teoria moderna.</p>

    <h2 style="margin-top:2.5rem">Verificação automática</h2>
    <p>O repositório inclui um validador que roda antes de publicar e bloqueia a publicação quando encontra prática ritual prescrita, tradição não nomeada, síntese sem fonte, promessa de cura, sofrimento lido como sinal espiritual, citação sem procedência, link quebrado ou página sem nota de cuidado.</p>

    <h2 style="margin-top:2.5rem">Revisão</h2>
    <p>Esta versão é preliminar e está em revisão por pessoas das tradições tratadas. Correções são bem-vindas pelo <a href="https://github.com/edumimessi/luzeaxe/issues" rel="noopener">repositório do projeto</a>.</p>`
});

/* ---------------- conceitos ---------------- */
paginas.push({
  arquivo: 'conceitos.html',
  titulo: 'Conceitos — glossário de trabalho | Luz e Axé',
  descricao: 'Glossário contextual de termos das tradições afro-brasileiras: axé, ori, orixá, vodum, inquice, encantado, egun, preto-velho, exu, terreiro e outros, com limites declarados.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Definições de trabalho</span>
    <h1>Conceitos</h1>
    <p class="sub">Este glossário é contextual, nunca universal. Cada verbete traz também o seu limite — o que o termo <em>não</em> significa e com o que não deve ser confundido. Sentidos variam entre tradições, nações, casas e autores.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <ul class="limpa">
      ${D.GLOSSARIO.map((g) => `<li><h3>${esc(g.t)}</h3><p>${esc(g.d)}</p></li>`).join('\n      ')}
    </ul>
    <p class="origem" style="margin-top:1.6rem">Glossário de trabalho, elaborado a partir das obras listadas em <a href="fontes.html">Fontes</a>. Não substitui o vocabulário de cada casa nem a explicação de quem é da tradição.</p>
  </section>`
});

/* ---------------- fontes ---------------- */
paginas.push({
  arquivo: 'fontes.html',
  titulo: 'Fontes e créditos — Luz e Axé',
  descricao: 'Bibliografia consultada: pensamento negro brasileiro, antropologia das religiões de matriz africana e obras de autoria de lideranças das tradições.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Procedência</span>
    <h1>Fontes</h1>
    <p class="sub">Toda síntese educativa deste site se apoia nas obras abaixo, e cada meditação indica qual delas a sustenta. Blocos marcados como autorais são do autor e não devem ser atribuídos a nenhuma dessas obras.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <dl class="fontes">
      ${D.FONTES.map((f) => `<dt>${esc(f.autor)}</dt><dd><em>${esc(f.obra)}</em>. ${esc(f.ed)}, ${esc(f.ano)}.</dd>`).join('\n      ')}
    </dl>
    <p class="origem" style="margin-top:1.6rem">Lista de leitura introdutória; não esgota a bibliografia disponível. Sugestões de inclusão são bem-vindas no repositório do projeto.</p>
  </section>`
});

/* ---------------- autor ---------------- */
paginas.push({
  arquivo: 'autor.html',
  titulo: 'Sobre o autor — Luz e Axé',
  descricao: 'Dr. Eduardo D\'Angelo Mimessi, médico, autor e educador. Quem escreve este site e em que condição.',
  corpo: `
  <div class="envolt hero" style="padding-bottom:1.5rem">
    <span class="olho">Sobre</span>
    <h1>Dr. Eduardo D'Angelo Mimessi</h1>
    <p class="sub">Médico, autor e educador. CRM-SP 121.217.</p>
  </div>
  <section class="envolt" style="border-top:0;padding-top:0">
    <p>Dedica-se ao encontro entre saúde mental e busca de sentido, e ao diálogo respeitoso entre conhecimento e experiência humana. Escreve sobre vida interior e sobre as grandes tradições espirituais.</p>
    <p><strong>Não é sacerdote, iniciado nem autoridade religiosa</strong> de nenhuma das tradições apresentadas neste site. O que escreve aqui é leitura de quem estuda e admira, apoiada na literatura listada em <a href="fontes.html">Fontes</a> — não é fala de dentro.</p>
    <p>Luz e Axé nasce da convicção de que as tradições afro-brasileiras não são folclore nem etapa superada, mas patrimônio civilizatório com pensamento próprio sobre memória, corpo, comunidade e destino — e que apresentá-las em português, com fontes e sem apagar diferenças, é uma forma de reparação possível.</p>
    <p><strong>Autoria e desenvolvimento.</strong> Este site foi concebido e curado editorialmente pelo Dr. Eduardo D'Angelo Mimessi, e desenvolvido com apoio de ferramentas digitais.</p>
    <p class="origem" style="margin-top:2rem">Esta página é informativa. Este site não oferece serviços, consultas ou atendimento, e não é canal de contato profissional. O trabalho editorial do autor integra o <a href="https://vidaesentido.com.br" rel="noopener">Projeto Vida e Sentido</a>.</p>
  </section>`
});

/* ---------------- estados ---------------- */
paginas.push({
  arquivo: 'offline.html',
  indexavel: false,
  titulo: 'Sem conexão — Luz e Axé',
  descricao: 'Esta página aparece quando não há conexão disponível.',
  corpo: `
  <div class="envolt estado">
    ${SELO}
    <h1>Sem conexão</h1>
    <p class="sub" style="margin:0 auto">Você está sem acesso à internet no momento. As páginas já visitadas continuam disponíveis; as demais voltam assim que a conexão retornar.</p>
    <div class="acoes" style="justify-content:center">
      <a class="botao cheio" href="index.html">Voltar ao início</a>
      <a class="botao" href="devocional.html">Meditação do dia</a>
    </div>
  </div>`
});

paginas.push({
  arquivo: '404.html',
  indexavel: false,
  titulo: 'Página não encontrada — Luz e Axé',
  descricao: 'O endereço solicitado não existe neste site.',
  corpo: `
  <div class="envolt estado">
    ${SELO}
    <h1>Página não encontrada</h1>
    <p class="sub" style="margin:0 auto">O endereço que você procurou não existe aqui. Pode ter sido movido ou digitado de outro jeito.</p>
    <div class="acoes" style="justify-content:center">
      <a class="botao cheio" href="index.html">Voltar ao início</a>
      <a class="botao" href="tradicoes.html">Ver as tradições</a>
    </div>
  </div>`
});

/* ---------------- escrita ---------------- */

for (const p of paginas) {
  writeFileSync(join(docs, p.arquivo), pagina(p), 'utf8');
  console.log('escrito  docs/' + p.arquivo);
}

const hoje = new Date().toISOString().slice(0, 10);
const indexaveis = paginas.filter((p) => p.indexavel !== false);
writeFileSync(join(docs, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexaveis.map((p) => `  <url><loc>${SITE}/${p.arquivo === 'index.html' ? '' : p.arquivo}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}
</urlset>
`, 'utf8');
console.log('escrito  docs/sitemap.xml');
console.log(`\n${paginas.length} páginas geradas (${indexaveis.length} indexáveis).`);
