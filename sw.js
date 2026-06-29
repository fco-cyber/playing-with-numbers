/* Mayah's Rainbow Reef — service worker
   Network-first so updates are picked up automatically, with a cache fallback so
   the app keeps working offline once it has been opened. */
const CACHE = 'rainbow-reef-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
                './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    try {
      const net = await fetch(req);
      const cache = await caches.open(CACHE);
      cache.put(req, net.clone()).catch(() => {});
      return net;
    } catch (err) {
      const cached = await caches.match(req);
      return cached || caches.match('./index.html');
    }
  })());
});
