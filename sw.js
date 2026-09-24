const CACHE_NAME = "mi-espacio-v2";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./verses.js",
  "./manifest.json",
  "./logo.png",
  "https://googleapis.com",
];

// Evento de Instalación: Guarda los archivos esenciales en la caché del teléfono
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Abriendo caché y guardando archivos estáticos...");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting()),
  );
});

// Evento de Activación: Limpia automáticamente versiones antiguas de caché en el dispositivo
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log("Borrando caché antigua detectada:", cache);
              return caches.delete(cache);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Evento Fetch: Sirve los archivos desde la caché local para máxima velocidad offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna el archivo desde la caché local; si no existe, lo solicita por red
      return response || fetch(event.request);
    }),
  );
});
