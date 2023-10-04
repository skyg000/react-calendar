const staticCacheName = "version-1"
const dynamicCache = "dynamicCache";
const urlsToCache = [
    "/react-calendar/index.html",
    '/react-calendar/static/js/bundle.js',
    '/react-calendar/manifest.json',
]

const limitCacheSize = (name, size)=>{
    caches.open(name).then(cache=>{
        cache.keys().then(keys=>{
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name,size))
            }
        })
    })
}

this.addEventListener('install', (event)=>{
    console.log('install');
    event.waitUntil(
        caches.open(staticCacheName).then((cache)=>{
            console.log('Opend Cache')
            return cache.addAll(urlsToCache);
        })
    )
})

this.addEventListener('fetch', event => {
    console.log('fetch');
    event.respondWith(
        caches.match(event.request).then(cacheRes=>{
            return cacheRes || fetch(event.request).then(fetchRes=>{
                return caches.open(dynamicCache).then(cache => {
                    cache.put(event.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache,10);
                    return fetchRes;
                })
            })
        }).catch(()=>{
            if(event.request.url.indexOf('.html') > -1){
                return caches.match('/fallback.html')    
            }            
        })
    )
})

this.addEventListener('activate', event=>{
    console.log('activate');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key=> key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
})