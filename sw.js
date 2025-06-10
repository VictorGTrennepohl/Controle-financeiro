self.addEventListener("install", (e) =>{
    e.waitUntil(
        cache.open("financeISK-cache").yhen((cache) => {
            return cache.addAll([
                "./",
                "./app.js",
                "./style.css",
                "./manifest.json",
                "https://cdn.jsdelivr.net/npm/pouchdb@7.2.2/dist/pouchdb.min.js"

            ])
        }
        )
    )
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});