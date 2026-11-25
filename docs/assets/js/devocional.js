/* Luz e Axé — leitor do devocional diário
 *
 * Cada bloco é rotulado com o gênero do texto. A ordem é deliberada:
 * primeiro o que é da tradição e sua fonte, depois o que é do autor.
 */
(function () {
  'use strict';

  var D = window.LUZEAXE || {};
  var indiceAtual = 0;
  var lista = D.MEDITACOES || [];
  var chaveFavoritos = 'luzeaxe-favoritos';
  var calendario = D.CALENDARIO || {};
  var datas = new Map(Object.entries(calendario.porData || {}).map(function ([data, id]) {
    return [id, data.split('-').reverse().join('/')];
  }));
  var porId = new Map(lista.map(function (m) { return [String(m.n), m]; }));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function el(id) { return document.getElementById(id); }

  function dataNoFuso(fuso, agora) {
    var partes = new Intl.DateTimeFormat('en-CA', {
      timeZone: fuso,
      month: '2-digit', day: '2-digit'
    }).formatToParts(agora || new Date());
    var mapa = {};
    partes.forEach(function (p) { mapa[p.type] = p.value; });
    return mapa.month + '-' + mapa.day;
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

    h += '<span class="olho">' + esc(nomePrincipio(m.principio)) + ' · ' + esc(datas.get(m.n)) + ' · leitura ' + esc(m.n) + ' de ' + total + '</span>';
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

    var credito = m.textoEditorial ? 'Reflexão editorial' : 'Reflexão autoral — Dr. Eduardo Mimessi';
    h += bloco('autoral', credito, 'Reflexão', m.reflexao);
    if (m.sentido) h += bloco('autoral', 'Diálogo existencial proposto pelo autor', 'Busca de sentido', m.sentido);
    if (m.consideracao && sobreposicao(m.reflexao, m.consideracao) < 0.55) {
      h += bloco('aplicacao', 'Aplicação existencial — reflexão, não instrução', 'Para considerar', m.consideracao);
    }
    h += bloco('aplicacao', 'Pergunta aberta', 'Para ficar com você', m.pergunta);

    return h;
  }

  function mostra(i) {
    if (!lista.length) return;
    indiceAtual = ((i % lista.length) + lista.length) % lista.length;
    var alvo = el('leitor');
    if (alvo) alvo.innerHTML = monta(lista[indiceAtual]);
    var pos = el('posicao');
    if (pos) pos.textContent = (indiceAtual + 1) + ' / ' + lista.length;
    atualizaFavorito();
    el('link-leitura').hidden = true;
    el('leitor-status').textContent = 'Leitura ' + (indiceAtual + 1) + ': ' + lista[indiceAtual].titulo;
  }

  function favoritos() {
    try {
      var ids = JSON.parse(localStorage.getItem(chaveFavoritos) || '[]');
      return Array.isArray(ids) ? ids : [];
    } catch (e) {
      return [];
    }
  }

  function atualizaFavorito() {
    el('favoritar').setAttribute('aria-pressed', String(favoritos().includes(lista[indiceAtual].n)));
  }

  function alternaFavorito() {
    var id = lista[indiceAtual].n;
    var ids = favoritos();
    var removendo = ids.includes(id);
    try {
      localStorage.setItem(chaveFavoritos, JSON.stringify(removendo
        ? ids.filter(function (item) { return item !== id; })
        : ids.concat(id)));
    } catch (e) {
      el('leitor-status').textContent = 'O navegador não permitiu salvar favoritos.';
      return;
    }
    atualizaFavorito();
    filtraAcervo();
    el('leitor-status').textContent = removendo ? 'Leitura removida dos favoritos.' : 'Leitura salva nos favoritos.';
  }

  function normaliza(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function filtraAcervo() {
    var busca = normaliza(el('buscar-leitura').value);
    var soFavoritos = el('so-favoritos').checked;
    var ids = favoritos();
    var total = 0;
    document.querySelectorAll('[data-leitura]').forEach(function (item) {
      var m = porId.get(item.dataset.leitura);
      var texto = normaliza([m.titulo, m.termo, nomePrincipio(m.principio), item.dataset.data].join(' '));
      item.hidden = !texto.includes(busca) || (soFavoritos && !ids.includes(m.n));
      if (!item.hidden) total += 1;
    });
    el('resultado-acervo').textContent = total === 0 ? 'Nenhuma leitura encontrada.' :
      total === 1 ? '1 leitura encontrada.' : total + ' leituras encontradas.';
  }

  async function compartilha() {
    var m = lista[indiceAtual];
    var url = new URL(window.location.href);
    url.searchParams.set('leitura', m.n);
    url.hash = 'leitor';
    try {
      if (navigator.share) {
        await navigator.share({ title: m.titulo + ' — Luz e Axé', url: url.href });
        return;
      }
      await navigator.clipboard.writeText(url.href);
      el('leitor-status').textContent = 'Link copiado.';
    } catch (e) {
      if (e.name === 'AbortError') return;
      var campo = el('url-leitura');
      el('link-leitura').hidden = false;
      campo.value = url.href;
      campo.focus();
      campo.select();
    }
  }

  function iniciar() {
    var alvo = el('leitor');
    if (!alvo) return;
    if (!lista.length) { alvo.innerHTML = '<p>Nenhuma meditação publicada.</p>'; return; }

    var fuso = calendario.fuso || 'America/Sao_Paulo';
    function indiceDeHoje() {
      var data = dataNoFuso(fuso, new Date());
      var id = (calendario.porData || {})[data];
      var i = lista.findIndex(function (m) { return m.n === id; });
      return i >= 0 ? i : 0;
    }

    function abreEndereco() {
      var id = new URLSearchParams(window.location.search).get('leitura');
      var i = lista.findIndex(function (m) { return String(m.n) === id; });
      mostra(i >= 0 ? i : indiceDeHoje());
    }

    function navega(i, hoje) {
      mostra(i);
      var url = new URL(window.location.href);
      if (hoje) url.searchParams.delete('leitura');
      else url.searchParams.set('leitura', lista[indiceAtual].n);
      window.history.replaceState(null, '', url);
    }

    abreEndereco();
    window.addEventListener('popstate', abreEndereco);

    el('anterior').addEventListener('click', function () { navega(indiceAtual - 1); });
    el('proxima').addEventListener('click', function () { navega(indiceAtual + 1); });
    el('hoje').addEventListener('click', function () { navega(indiceDeHoje(), true); });
    el('favoritar').addEventListener('click', alternaFavorito);
    el('compartilhar').addEventListener('click', compartilha);
    el('buscar-leitura').addEventListener('input', filtraAcervo);
    el('so-favoritos').addEventListener('change', filtraAcervo);
    filtraAcervo();

    document.addEventListener('keydown', function (e) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey ||
          e.target.closest('input, textarea, select, [contenteditable]')) return;
      if (e.key === 'ArrowLeft') navega(indiceAtual - 1);
      if (e.key === 'ArrowRight') navega(indiceAtual + 1);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
