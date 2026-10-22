const V='ph-v2',A=['./','index.html','manifest.webmanifest','icon.svg','config.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(V).then(ch=>ch.put(e.request,c));return n}).catch(()=>caches.match('index.html'))))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
