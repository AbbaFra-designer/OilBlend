const CACHE_NAME = 'oilblend-v1';
const ASSETS = [
  '/OilBlend/',
  '/OilBlend/index.html',
  '/OilBlend/manifest.json'
  // aggiungi altri file CSS/JS se li hai separati
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
