// ========================================
// KILL-SWITCH - TEST VERSION
// ========================================
const EXPIRY_DATE = new Date('2026-02-03T15:35:00');
const now = new Date();

console.log('=== SERVICE WORKER KILL-SWITCH TEST ===');
console.log('Ablaufdatum:', EXPIRY_DATE);
console.log('Aktuelles Datum:', now);
console.log('Service Worker gesperrt:', now > EXPIRY_DATE);

if (now > EXPIRY_DATE) {
  // Beta-Phase beendet - Service Worker blockiert alle Requests
  self.addEventListener('fetch', event => {
    event.respondWith(
      new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Beta-Phase beendet</title>
        </head>
        <body style="
          margin: 0;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          text-align: center;
          padding: 20px;
        ">
          <div style="
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            max-width: 400px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          ">
            <div style="font-size: 80px; margin-bottom: 20px;">🔒</div>
            <h1 style="font-size: 32px; margin-bottom: 16px; font-weight: 700;">Beta-Phase beendet</h1>
            <p style="font-size: 18px; opacity: 0.9; line-height: 1.6;">
              Die Testphase dieser App ist abgelaufen.<br>
              Vielen Dank für deine Teilnahme!
            </p>
            <div style="
              margin-top: 30px;
              padding: 15px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              font-size: 14px;
              opacity: 0.7;
            ">
              Ablaufdatum: ${EXPIRY_DATE.toLocaleString('de-DE')}
            </div>
            <div style="
              margin-top: 15px;
              padding: 10px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 8px;
              font-size: 12px;
              opacity: 0.6;
              color: #fbbf24;
            ">
              🧪 TEST-VERSION (Service Worker)
            </div>
          </div>
        </body>
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' }
      })
    );
  });
  
  // Verhindere weitere Service Worker Funktionen
  throw new Error('Beta-Phase beendet - Service Worker gesperrt (TEST)');
}

// ========================================
// NORMALER SERVICE WORKER CODE
// ========================================
const CACHE_NAME = 'checkout-world-v2-TEST-KILLSWITCH';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './Logo.png',
  './THE-MENACE.gif',
  './icon-192.png',
  './icon-512.png'
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
