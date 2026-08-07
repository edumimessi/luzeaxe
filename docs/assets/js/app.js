/* Luz e Axé — comportamento comum a todas as páginas.
 * O leitor do devocional vive em assets/js/devocional.js. */
(function () {
  'use strict';

  function iniciaTema() {
    var salvo = null;
    try { salvo = localStorage.getItem('luzeaxe-tema'); } catch (e) {}
    if (salvo) document.documentElement.setAttribute('data-tema', salvo);

    var botao = document.querySelector('button.tema');
    if (!botao) return;
    botao.addEventListener('click', function () {
      var novo = document.documentElement.getAttribute('data-tema') === 'claro' ? 'escuro' : 'claro';
      document.documentElement.setAttribute('data-tema', novo);
      try { localStorage.setItem('luzeaxe-tema', novo); } catch (e) {}
      botao.setAttribute('aria-label', novo === 'claro' ? 'Ativar tema escuro' : 'Ativar tema claro');
    });
  }

  function iniciar() {
    iniciaTema();
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
