/* Luz e Axé — leitor do devocional diário
 *
 * Cada bloco é rotulado com o gênero do texto. A ordem é deliberada:
 * primeiro o que é da tradição e sua fonte, depois o que é do autor.
 */
(function () {
  'use strict';

  var D = window.LUZEAXE || {};
  var indiceAtual = 0;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function el(id) { return document.getElementById(id); }

  function dataNoFuso(fuso, agora) {
    var partes = new Intl.DateTimeFormat('en-CA', {
      timeZone: fuso,
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(agora || new Date());
    var mapa = {};
    partes.forEach(function (p) { mapa[p.type] = p.value; });
    return { ano: Number(mapa.year), mes: Number(mapa.month), dia: Number(mapa.day) };
  }

  function diaDoAnoNoFuso(fuso, agora) {
    var d = dataNoFuso(fuso, agora);
    return Math.floor((Date.UTC(d.ano, d.mes - 1, d.dia) - Date.UTC(d.ano, 0, 1)) / 86400000) + 1;
  }

  function palavras(s) {
    return new Set(String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(function (p) { return p.length > 3; }));
  }

  function sobreposicao(a, b) {
    var A = palavras(a), B = palavras(b), uniao = new Set();
    A.forEach(function (p) { uniao.add(p); });
    B.forEach(function (p) { uniao.add(p); });
    if (!uniao.size) return 0;
    var comuns = 0;
    A.forEach(function (p) { if (B.has(p)) comuns += 1; });
    return comuns / uniao.size;
  }

  function nomePrincipio(id) {
    var p = (D.PRINCIPIOS || []).filter(function (x) { return x.id === id; })[0];
    return p ? p.nome : id;
  }

  function bloco(classe, selo, titulo, texto) {
    return '<div class="bloco">' +
      '<span class="selo-genero ' + classe + '">' + esc(selo) + '</span>' +
      '<h4>' + esc(titulo) + '</h4><p>' + esc(texto) + '</p></div>';
  }

  function monta(m) {
    if (!m) return '<p>Meditação não encontrada.</p>';
    var total = (D.MEDITACOES || []).length;
    var h = '';

    h += '<span class="olho">' + esc(nomePrincipio(m.principio)) + ' · leitura ' + esc(m.n) + ' de ' + total + '</span>';
    h += '<h2>' + esc(m.titulo) + '</h2>';

    h += '<span class="selo-genero termo">Termo da tradição</span>';
    h += '<p class="termo-linha">' + esc(m.termo) + '</p>';
    h += '<p class="traducao">' + esc(m.idioma) + ' — ' + esc(m.traducao) + '</p>';

    h += '<div class="bloco">';
    h += '<span class="selo-genero sintese">Síntese educativa</span>';
    h += '<h4>Contexto</h4><p>' + esc(m.contexto) + '</p>';
    h += '<p class="origem">Tradição: ' + esc(m.tradicao) + '</p>';
    h += '<p class="origem">Fonte: ' + esc(m.fonte) + '</p>';
    h += '</div>';

    h += bloco('autoral', 'Reflexão autoral — Dr. Eduardo Mimessi', 'Reflexão', m.reflexao);
    if (m.sentido) h += bloco('autoral', 'Diálogo existencial proposto pelo autor', 'Busca de sentido', m.sentido);
    if (m.consideracao && sobreposicao(m.reflexao, m.consideracao) < 0.55) {
      h += bloco('aplicacao', 'Aplicação existencial — reflexão, não instrução', 'Para considerar', m.consideracao);
    }
    h += bloco('aplicacao', 'Pergunta aberta', 'Para ficar com você', m.pergunta);

    if (D.NOTA_CUIDADO) {
      h += '<div class="nota-cuidado"><strong>Nota de cuidado</strong><p>' +
           esc(D.NOTA_CUIDADO.longa) + '</p></div>';
    }
    return h;
  }

  function mostra(i) {
    var lista = D.MEDITACOES || [];
    if (!lista.length) return;
    indiceAtual = ((i % lista.length) + lista.length) % lista.length;
    var alvo = el('leitor');
    if (alvo) alvo.innerHTML = monta(lista[indiceAtual]);
    var pos = el('posicao');
    if (pos) pos.textContent = (indiceAtual + 1) + ' / ' + lista.length;
  }

  function iniciar() {
    var alvo = el('leitor');
    if (!alvo) return;
    var lista = D.MEDITACOES || [];
    if (!lista.length) { alvo.innerHTML = '<p>Nenhuma meditação publicada.</p>'; return; }

    var calendario = D.CALENDARIO || {};
    var fuso = calendario.fuso || 'America/Sao_Paulo';
    var dia = diaDoAnoNoFuso(fuso, new Date());
    var idDoDia = calendario.porDiaDoAno && calendario.porDiaDoAno[dia];
    var indiceDoDia = lista.findIndex(function (m) { return m.n === idDoDia; });

    if (calendario.cicloCompleto && indiceDoDia >= 0) {
      mostra(indiceDoDia);
    } else {
      /* Acervo preliminar: seleção estável, explicitamente não anual. */
      mostra((dia - 1) % lista.length);
      var aviso = el('aviso-ciclo');
      if (aviso) aviso.hidden = false;
    }

    var ant = el('anterior'), pro = el('proxima'), hoje = el('hoje');
    if (ant) ant.addEventListener('click', function () { mostra(indiceAtual - 1); });
    if (pro) pro.addEventListener('click', function () { mostra(indiceAtual + 1); });
    if (hoje) hoje.addEventListener('click', function () {
      var d = diaDoAnoNoFuso(fuso, new Date());
      var id = calendario.porDiaDoAno && calendario.porDiaDoAno[d];
      var i = lista.findIndex(function (m) { return m.n === id; });
      mostra(calendario.cicloCompleto && i >= 0 ? i : (d - 1) % lista.length);
    });

    document.addEventListener('keydown', function (e) {
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === 'ArrowLeft') mostra(indiceAtual - 1);
      if (e.key === 'ArrowRight') mostra(indiceAtual + 1);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
