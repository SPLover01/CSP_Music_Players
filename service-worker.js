const CACHE_NAME = "csp-player-v1";
const urlsToCache = [
  "index.html",
  "manifest.json",
  "images/csp-logo-192.png",
  "images/csp-logo-512.png"
  // yaha apne songs bhi add kar sakte ho e.g. "songs/mysong.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
