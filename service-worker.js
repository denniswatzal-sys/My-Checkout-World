const CACHE_NAME = 'checkout-world-v1';
const urlsToCache = [
  '/My-Checkout-World/',
  '/My-Checkout-World/index.html',
  '/My-Checkout-World/style.css',
  '/My-Checkout-World/script.js',
  '/My-Checkout-World/Logo.png',
  '/My-Checkout-World/THE-MENACE.gif',
  '/My-Checkout-World/icon-192.png',
  '/My-Checkout-World/icon-512.png'
];

// Installation - Cache alle wichtigen Dateien
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Service Worker: Error caching', err))
  );
});

// Aktivierung - Lösche alte Caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch - Lade aus Cache wenn verfügbar, sonst aus Netzwerk
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // Fallback für offline
        console.log('Service Worker: Fetch failed, serving offline page');
      })
  );
});
