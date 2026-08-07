/* Luz e Axé — service worker
 *
 * Regra: navegação que falha cai em offline.html. Recurso que falha NÃO recebe
 * HTML de substituição — devolver uma página no lugar de um CSS, script ou
 * imagem quebra o site em vez de degradá-lo.
 */
const CACHE = 'luzeaxe-v3';
const OFFLINE = './offline.html';

const ESSENCIAIS = [
  './', './index.html', './devocional.html', './tradicoes.html', './principios.html',
  './orixas.html', './vozes.html', './conceitos.html', './fontes.html',
  './metodo-editorial.html', './autor.html', './offline.html', './404.html',
  './assets/css/site.css',
  './assets/js/app.js', './assets/js/devocional.js', './assets/data/reflexoes.js',
  './manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(ESSENCIAIS.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Navegação: rede primeiro, cache depois, offline.html por último.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const copia = r.clone();
          caches.open(CACHE).then((c) => c.put(req, copia)).catch(() => {});
          return r;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match(OFFLINE)))
    );
    return;
  }

  // Demais recursos: cache primeiro; se falhar, erro de rede honesto.
  e.respondWith(
    caches.match(req).then((cacheado) => {
      if (cacheado) return cacheado;
      return fetch(req).then((r) => {
        if (r && r.ok) {
          const copia = r.clone();
          caches.open(CACHE).then((c) => c.put(req, copia)).catch(() => {});
        }
        return r;
      });
    })
  );
});
