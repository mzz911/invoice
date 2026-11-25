/* Invoice Kedai PWA - service worker network sahaja.
   Sengaja TAK simpan cache: supaya bila upload index.html baru kat GitHub,
   app terus tunjuk versi baru, tak melekat kat versi lama.
   Fail ni wujud untuk benarkan butang "Install app" kat Android Chrome. */
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
