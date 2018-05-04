self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if(response) return response;
			return fetch(event.request);
		})
		);
});
self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('new-cache').then(function(cache){
			return cache.addAll([
		  '/',
 		  '/js/dbhelper.js',
          '/js/restaurant_info.js',
          '/js/main.js',
          '/css/styles.css',
          '/data/restaurants.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg'
          ]);
		})
		);
});
