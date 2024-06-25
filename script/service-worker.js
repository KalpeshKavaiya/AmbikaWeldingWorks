const cacheName = "v1";
const cacheAssets = ["index.html", "style.css", "script.js"];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log("Service Worker: Caching Files");
        return cache.addAll(cacheAssets);
      })
      .then(function() {
        self.skipWaiting();
      })
      .catch(function(error) {
        console.error("Error caching files:", error);
      })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys()
      .then(function(keys) {
        return Promise.all(
          keys.map(function(key) {
            if (key !== cacheName) {
              console.log("Service Worker: Clearing Old Cache");
              return caches.delete(key);
            }
          })
        );
      })
      .catch(function(error) {
        console.error("Error clearing old cache:", error);
      })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    fetch(e.request)
      .catch(function() {
        return caches.match(e.request);
      })
      .catch(function(error) {
        console.error("Error fetching resource:", error);
      })
  );
});