const CACHE_NAME = 'pp-v1';
const ASSETS = [
  'index.html',
  'styles.css',
  'app.js',
  'planetpoints.png',
  'features.html',
  'gallery.html',
  'contact.html',
  'onama.html',
  'partneri.html',
  'privatnost.html',
  'uslovi.html',
  'blog.html',
  'faq.html',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      return resp;
    }).catch(() => cached))
  );
});
