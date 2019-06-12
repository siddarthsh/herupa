// service-worker.js

// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = "pwa-app-cache";

// Delete old caches
self.addEventListener("activate", event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// This triggers when user starts the app
self.addEventListener("install", function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        fetch("asset-manifest.json")
          .then(response => {
            response.json();
          })
          .then(assets => {
            // We will cache initial page and the main.js
            // We could also cache assets like CSS and images
            const urlsToCache = ["/", assets["index.js"]];
            cache.addAll(urlsToCache);
          });
      })
    );
  }
});

// Here we intercept request and serve up the matching files
self.addEventListener("fetch", function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});

let CACHE_NAME = "sw-v1";
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll("./404.html"))
  );
});
self.addEventListener("fetch", event => {
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then(cached => {
        var networked = fetch(event.request)
          .then(response => {
            let cacheCopy = response.clone();
            caches
              .open(CACHE_NAME)
              .then(cache => cache.put(event.request, cacheCopy));
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    );
  }
  return;
});
