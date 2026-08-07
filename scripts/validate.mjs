/* Luz e Axé — auditoria editorial e técnica
 *
 *   node scripts/validate.mjs
 *
 * Sai com código 1 se houver erro. Avisos não bloqueiam.
 *
 * A regra que organiza todas as outras: o leitor precisa saber, em cada bloco,
 * se está lendo tradição, síntese acadêmica ou interpretação do autor.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(raiz, 'docs');

const erros = [];
const avisos = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

const janela = {};
new Function('window', readFileSync(join(docs, 'assets/data/reflexoes.js'), 'utf8'))(janela);
const D = janela.LUZEAXE;

const camposPublicos = ['titulo', 'contexto', 'reflexao', 'sentido', 'consideracao', 'pergunta'];

/* ---- 1. integridade dos dados ---------------------------------- */

const idsPrincipios = new Set(D.PRINCIPIOS.map((p) => p.id));
const obrigatorios = ['n', 'principio', 'titulo', 'termo', 'idioma', 'traducao', 'tradicao', 'fonte', 'contexto', 'reflexao', 'consideracao', 'pergunta'];

const vistos = new Set();
for (const m of D.MEDITACOES) {
  const rot = `meditação ${m.n ?? '?'}`;
  for (const c of obrigatorios) {
    if (!m[c] || String(m[c]).trim() === '') erro(`${rot}: campo obrigatório ausente ou vazio — ${c}`);
  }
  if (!idsPrincipios.has(m.principio)) erro(`${rot}: princípio desconhecido — ${m.principio}`);
  if (vistos.has(m.n)) erro(`${rot}: número duplicado`);
  vistos.add(m.n);
}

const normaliza = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const camposUnicos = ['titulo', 'termo', 'contexto', 'reflexao', 'pergunta'];
for (const campo of camposUnicos) {
  const textos = new Map();
  for (const m of D.MEDITACOES) {
    const texto = normaliza(m[campo]);
    if (textos.has(texto)) erro(`meditações ${textos.get(texto)} e ${m.n}: campo "${campo}" duplicado`);
    textos.set(texto, m.n);
  }
}

if (!D.CALENDARIO || D.CALENDARIO.fuso !== 'America/Sao_Paulo') {
  erro('CALENDARIO deve declarar o fuso America/Sao_Paulo');
}
if (D.CALENDARIO?.cicloCompleto && D.MEDITACOES.length !== 366) {
  erro('ciclo anual só pode ser marcado como completo com exatamente 366 meditações');
}
const idsMeditacoes = new Set(D.MEDITACOES.map((m) => m.n));
for (const [dia, id] of Object.entries(D.CALENDARIO?.porDiaDoAno ?? {})) {
  if (+dia < 1 || +dia > 366) erro(`dia inválido no calendário: ${dia}`);
  if (!idsMeditacoes.has(id)) erro(`calendário aponta para meditação inexistente: ${id}`);
}

if (!Array.isArray(D.INDICE_EDITORIAL) || D.INDICE_EDITORIAL.length !== D.MEDITACOES.length) {
  erro('INDICE_EDITORIAL deve conter uma entrada para cada meditação');
} else {
  for (const item of D.INDICE_EDITORIAL) {
    if (!idsMeditacoes.has(item.meditacao) || !item.fonte || !item.natureza) {
      erro(`entrada editorial incompleta para a meditação ${item.meditacao ?? '?'}`);
    }
    if (item.fonteConferida && !item.localizador) {
      erro(`meditação ${item.meditacao}: fonte marcada como conferida sem página, capítulo ou seção`);
    }
  }
}

for (const p of D.PRINCIPIOS) {
  if (!D.MEDITACOES.some((m) => m.principio === p.id)) erro(`princípio "${p.nome}" não tem nenhuma meditação`);
}

for (const bloco of ['RECORTE', 'NOTA_CUIDADO', 'COSMOLOGIA', 'DISTINCOES', 'TRADICOES', 'VOZES', 'FONTES']) {
  if (!D[bloco]) erro(`bloco de dados ausente: ${bloco}`);
}
if (D.COSMOLOGIA && (!D.COSMOLOGIA.corrente || !D.COSMOLOGIA.fonte || !D.COSMOLOGIA.naoDizemos)) {
  erro('COSMOLOGIA deve declarar corrente, fonte e o limite explícito (naoDizemos)');
}

/* ---- 2. nomear a tradição e a fonte ----------------------------- */

const matrizes = ['Ketu', 'Nagô', 'Jeje', 'Angola', 'Congo', 'Umbanda', 'Mina', 'Xangô', 'Batuque', 'bantu', 'iorubá', 'ATENÇÃO'];
for (const m of D.MEDITACOES) {
  if (!matrizes.some((t) => String(m.tradicao).includes(t))) {
    erro(`meditação ${m.n}: campo "tradicao" não nomeia matriz reconhecível — "${m.tradicao}"`);
  }
  if (!/\(\d{4}\)/.test(String(m.fonte))) {
    erro(`meditação ${m.n}: campo "fonte" deve citar obra com ano — "${m.fonte}"`);
  }
}

/* ---- 3. não prescrever prática religiosa ------------------------ */

const rituais = ['oferenda', 'ebó', 'ebo ', 'obrigação', 'banho de ervas', 'despacho', 'padê', 'sacrif', 'assentamento', 'amaci', 'bori', 'jogo de búzios', 'feitura'];
for (const m of D.MEDITACOES) {
  const p = String(m.consideracao).toLowerCase();
  for (const t of rituais) {
    if (p.includes(t)) erro(`meditação ${m.n}: consideração menciona ato ritual ("${t}")`);
  }
}
/* Nada de exercício, tarefa ou roteiro: o site não é caderno de práticas. */
const imperativos = [
  /^(Escreva|Faça|Leia|Marque|Pegue|Reserve|Identifique|Procure|Recorde|Liste|Anote|Ouça|Caminhe|Pare|Complete|Escolha|Separe|Apoie|Respire|Registre)\b/i,
  /\bhoje, (não|escolha|reserve|faça)\b/i,
  /\bdurante (uma semana|dez semanas|sete dias)\b/i
];
for (const m of D.MEDITACOES) {
  for (const re of imperativos) {
    if (re.test(String(m.consideracao).trim())) {
      erro(`meditação ${m.n}: a consideração está em forma de tarefa (${re}). Deve ser proposição ou pergunta.`);
    }
  }
}

/* ---- 4. nada de promessa terapêutica ---------------------------- */

const clinicos = ['cura', 'curar', 'tratamento', 'terapêutic', 'terapia', 'remédio', 'medicamento', 'diagnóstic', 'sintoma'];
/* Fronteira de palavra: "procuramos" contém "cura" e não é promessa de cura. */
const terapeuticos = [/\bcura(r|s)?\b/i, /\btratamentos?\b/i, /\brem[ée]dios?\b/i, /\bterapi(a|as|as)\b/i];
for (const m of D.MEDITACOES) {
  for (const re of terapeuticos) {
    if (re.test(String(m.consideracao))) erro(`meditação ${m.n}: consideração sugere efeito terapêutico (${re})`);
  }
}
const antiMedico = [/medicar a dor/i, /medicaliza[çc][ãa]o da (dor|alma)/i, /rem[ée]dio n[ãa]o resolve/i, /em vez de (rem[ée]dio|medica)/i];
for (const m of D.MEDITACOES) {
  const todo = camposPublicos.map((c) => m[c] ?? '').join(' ');
  for (const re of antiMedico) {
    if (re.test(todo)) erro(`meditação ${m.n}: formulação que opõe espiritualidade a tratamento médico (${re})`);
  }
}

/* ---- 5. sofrimento não é sinal espiritual ----------------------- */

const culpabiliza = [
  /sofr\w+ (é|e) (sinal|sintoma|consequ[êe]ncia) (de|do|da) (afastamento|desequil[íi]brio|karma)/i,
  /adoece\w* porque (se afastou|perdeu o eixo|est[áa] em desequil[íi]brio)/i,
  /(afastamento|distanciamento) do (seu )?destino .{0,30}(sofr|adoec)/i,
  /energia (negativa|pesada) .{0,30}(doen|adoec)/i,
  /quem se fixa apenas em si adoece/i
];
for (const m of D.MEDITACOES) {
  const todo = camposPublicos.map((c) => m[c] ?? '').join(' ');
  for (const re of culpabiliza) {
    if (re.test(todo)) erro(`meditação ${m.n}: sofrimento apresentado como sinal espiritual ou falha pessoal (${re})`);
  }
}


/* ---- 5b. formulações vetadas pelo caderno-base ------------------ */
/* Fonte: Caderno-base, 9.3 (saúde) e 13.2 (equivalências). */

const frasesVetadas = [
  /perder ax[ée] .{0,15}(significa|é) adoecer/i,
  /(a )?doen[çc]a é um aviso do orix[áa]/i,
  /cobran[çc]a do ori/i,
  /o eb[óo] resolve o sofrimento/i,
  /o terreiro é terapia/i,
  /incorpora[çc][ãa]o é um valor .{0,20}m[áa]ximo/i,
  /ansiedade é excesso de foco/i,
  /ax[ée] .{0,10}(é|equivale a) .{0,10}vontade de sentido/i,
  /ori .{0,10}(é|equivale a) .{0,15}(miss[ãa]o|prop[óo]sito de vida)/i,
  /olodumare .{0,10}(é|equivale a) .{0,15}suprassentido/i,
  /orix[áa]s? (s[ãa]o|é) .{0,15}(arqu[ée]tipos?|for[çc]as? psicol[óo]gicas?)/i
];

function varreFrases(texto, onde) {
  for (const re of frasesVetadas) {
    if (re.test(texto)) erro(`${onde}: formulação vetada pelo caderno-base (${re})`);
  }
}

for (const m of D.MEDITACOES) {
  varreFrases(camposPublicos.map((c) => m[c] ?? '').join(' '), `meditação ${m.n}`);
}
for (const p of D.PRINCIPIOS) varreFrases(p.descricao + ' ' + p.resumo, `princípio ${p.nome}`);
for (const o of (D.COSMOLOGIA?.itens ?? [])) varreFrases(o.desc, `cosmologia: ${o.nome}`);
for (const g of (D.GLOSSARIO ?? [])) varreFrases(g.d, `glossário: ${g.t}`);
for (const t of (D.TRADICOES ?? [])) varreFrases(t.sagrado + ' ' + t.cautela, `tradição ${t.nome}`);

/* ---- 5c. tradições: cautela obrigatória ------------------------- */

for (const t of (D.TRADICOES ?? [])) {
  if (!t.cautela || t.cautela.trim() === '') erro(`tradição "${t.nome}": falta o campo de cautela`);
  if (!t.sagrado || t.sagrado.trim() === '') erro(`tradição "${t.nome}": falta a descrição de referências sagradas`);
}
if ((D.TRADICOES ?? []).length < 10) {
  aviso('mapa de tradições com menos de 10 campos; o caderno-base lista onze');
}
if (!(D.TRADICOES ?? []).some((t) => /Umbandas/.test(t.nome))) {
  erro('Umbanda deve aparecer no plural — "Umbandas" — por não haver catecismo único');
}

/* ---- 5d. blocos de governança editorial ------------------------- */

for (const b of ['ETIQUETAS', 'SEMAFORO', 'TESTES', 'NAO_DIZEMOS', 'GLOSSARIO', 'REVISAO']) {
  if (!D[b]) erro(`bloco de dados ausente: ${b}`);
}
if ((D.GLOSSARIO ?? []).length < 20) aviso('glossário com menos de 20 verbetes');
for (const g of (D.GLOSSARIO ?? [])) {
  if (!/[Nn][ãa]o |varia|diverso|plural|conforme o contexto|exige|limite|sentidos? diversos?/i.test(g.d)) {
    aviso(`glossário: verbete "${g.t}" não declara limite nem variação`);
  }
}
if (D.REVISAO && D.REVISAO.estado !== 'concluida' && D.REVISAO.registros.length === 0) {
  aviso('REVISÃO EXTERNA pendente: nenhum revisor registrado em REVISAO.registros');
}

/* ---- 6. arcabouço teórico velado -------------------------------- */

const velados = ['logoterapia', 'logoterap', 'frankl', 'psicoterapia', 'psicanáli', 'noodinâmica', 'vazio existencial', 'autotranscendência', 'autodistanciamento'];
for (const m of D.MEDITACOES) {
  for (const c of camposPublicos) {
    const v = String(m[c] ?? '').toLowerCase();
    for (const t of velados) {
      if (v.includes(t)) erro(`meditação ${m.n}, campo ${c}: termo técnico que deve permanecer velado — "${t}"`);
    }
  }
}

/* ---- 7. citação sem fonte --------------------------------------- */

const semFonte = [/prov[ée]rbio africano/i, /diz(em)? os antigos/i, /sabedoria ancestral diz/i, /como j[áa] dizia a tradi[çc][ãa]o/i, /as tradi[çc][õo]es .{0,25}sabem disso h[áa] muito tempo/i];
for (const m of D.MEDITACOES) {
  const todo = camposPublicos.map((c) => m[c] ?? '').join(' ');
  for (const re of semFonte) {
    if (re.test(todo)) erro(`meditação ${m.n}: atribuição genérica sem fonte identificável (${re})`);
  }
}

/* ---- 8. bibliografia -------------------------------------------- */

for (const f of D.FONTES) {
  if (!f.autor || !f.obra || !f.ano) erro(`fonte incompleta: ${JSON.stringify(f)}`);
}
if (D.FONTES.length < 8) aviso('bibliografia com menos de 8 obras');
const esperados = ['NASCIMENTO', 'GONZALEZ', 'SODRÉ', 'LOPES', 'SANTOS', 'WILLIAM'];
if (esperados.filter((a) => D.FONTES.some((f) => f.autor.includes(a))).length < 3) {
  erro('a bibliografia deve incluir autoria negra brasileira sobre as tradições tratadas');
}
const citadas = new Set(D.MEDITACOES.map((m) => String(m.fonte).split(',')[0].trim().toUpperCase()));
for (const c of citadas) {
  if (c.startsWith('CONCEITO')) continue;
  if (!D.FONTES.some((f) => f.autor.toUpperCase().startsWith(c))) {
    aviso(`fonte citada em meditação não consta na bibliografia: "${c}"`);
  }
}

/* ---- 9. páginas HTML -------------------------------------------- */

const htmls = readdirSync(docs).filter((f) => f.endsWith('.html'));
if (!htmls.length) erro('nenhuma página em docs/ — rode `node scripts/build.mjs`');

for (const arq of htmls) {
  const html = readFileSync(join(docs, arq), 'utf8');
  const redirecionamento = /http-equiv="refresh"/i.test(html);

  for (const m of html.matchAll(/href="(http:\/\/[^"]+)"/g)) erro(`${arq}: link em HTTP — ${m[1]}`);

  for (const m of html.matchAll(/href="(?!https?:|#|mailto:)([^"#?]+)/g)) {
    const alvo = m[1].split('#')[0];
    if (!alvo || alvo.endsWith('/')) continue;
    if (!existsSync(join(docs, alvo))) erro(`${arq}: link interno quebrado — ${alvo}`);
  }

  if (/clinicamimessi/i.test(html)) {
    erro(`${arq}: link para a clínica. Projeto editorial e assistência médica não se misturam.`);
  }

  if (!/lang="pt-BR"/.test(html)) erro(`${arq}: atributo lang ausente`);
  if (redirecionamento) continue;

  if (!/<meta name="description"/.test(html)) erro(`${arq}: meta description ausente`);
  if (!/não substitui terreiro/i.test(html)) erro(`${arq}: falta o aviso de que não substitui terreiro ou orientação religiosa`);
  if (!/assistência médica ou psicológica/i.test(html)) erro(`${arq}: falta a nota de cuidado (não substitui assistência médica ou psicológica)`);

  const estilo = (html.match(/<style[\s\S]*?<\/style>/gi) ?? []).join('');
  if (estilo.length > 400) aviso(`${arq}: ${estilo.length} bytes de CSS embutido; o estilo deve viver em assets/css/site.css`);

  // Os exemplos citados em metodo-editorial.html existem para serem recusados.
  const htmlSemExemplos = html.replace(/<li data-exemplo-vetado[\s\S]*?<\/li>/g, ' ');
  varreFrases(htmlSemExemplos.replace(/<[^>]+>/g, ' '), arq);

  for (const t of velados) {
    if (new RegExp(t, 'i').test(html.replace(/<!--[\s\S]*?-->/g, ''))) {
      erro(`${arq}: termo técnico que deve permanecer velado — "${t}"`);
    }
  }
}

/* ---- 10. arquivos obrigatórios ---------------------------------- */

const precisa = [
  'CNAME', 'robots.txt', 'sitemap.xml', 'manifest.webmanifest', 'sw.js',
  'offline.html', '404.html', 'index.html', 'devocional.html',
  'metodo-editorial.html', 'conceitos.html', 'assets/css/site.css',
  'assets/js/app.js', 'assets/js/devocional.js', 'assets/data/reflexoes.js'
];
for (const f of precisa) if (!existsSync(join(docs, f))) erro(`arquivo ausente: docs/${f}`);
for (const f of ['README.md', 'LICENSE']) if (!existsSync(join(raiz, f))) erro(`arquivo ausente na raiz: ${f}`);

const cname = existsSync(join(docs, 'CNAME')) ? readFileSync(join(docs, 'CNAME'), 'utf8').trim() : '';
if (cname !== 'luzeaxe.com.br') erro(`CNAME deve conter apenas "luzeaxe.com.br" — encontrado "${cname}"`);

/* ---- 11. service worker ----------------------------------------- */

const sw = readFileSync(join(docs, 'sw.js'), 'utf8');
if (!/offline\.html/.test(sw)) erro('sw.js: não há página offline dedicada');
if (/caches\.match\(['"]\.\/(index|devocional)\.html['"]\)/.test(sw) && !/mode === ['"]navigate['"]/.test(sw)) {
  erro('sw.js: devolve HTML como fallback genérico. Recursos que falham não podem receber uma página no lugar.');
}
if (!/mode === ['"]navigate['"]/.test(sw)) erro('sw.js: falta separar requisições de navegação das de recurso');

/* ---- 12. revisão externa ---------------------------------------- */

const readme = readFileSync(join(raiz, 'README.md'), 'utf8');
if (/Registrar aqui, quando houver/.test(readme)) {
  aviso('REVISÃO EXTERNA ainda não registrada no README — não publicar como versão final');
}

/* ---- resultado --------------------------------------------------- */

console.log('\nLuz e Axé — auditoria');
console.log(`${D.MEDITACOES.length} meditações · ${D.PRINCIPIOS.length} princípios · ${D.TRADICOES.length} tradições · ${D.FONTES.length} fontes · ${htmls.length} páginas\n`);
for (const a of avisos) console.log(`  aviso  ${a}`);
for (const e of erros) console.log(`  ERRO   ${e}`);

if (erros.length) {
  console.log(`\n${erros.length} erro(s). Corrija antes de publicar.\n`);
  process.exit(1);
}
console.log(`\nSem erros.${avisos.length ? ` ${avisos.length} aviso(s).` : ''}\n`);
