const CACHE_NAME = 'todo-cache-v1';
const urlsToCache = [
  '/', 
  '/index.html', 
  '/app.js', 
  '/manifest.json', 
  '/icon.png',  // 如果你有图标
  '/styles.css'  // 新加这一行
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
