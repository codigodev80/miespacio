const CACHE_NAME = "agenda-speed-v2";
const ASSETS = ["/", "/index.html", "/app.js", "/versiculos.json"];

// Instalar y almacenar en caché inmediatamente (Acelera la carga un 200%)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

// Estrategia Cache-First: Lee primero el almacenamiento local del teléfono antes de consultar la red
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    }),
  );
});
