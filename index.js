console.log("HELLO WORLD");

const value = localStorage.getItem('browser');

self.addEventListener("fetch", event => {
    async function cacheAndReturnRequest() {
        // Get the response from the server.
        const fetchResponse = await fetch(event.request.url);
        // Open the app's cache.
        const cache = await caches.open("cache-name");
        // Put the response in cache.
        cache.put(event.request.url, fetchResponse.clone());
        // And return the response.
        return fetchResponse
    }

    event.respondWith(cacheAndReturnRequest());
});

const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Instalando el Service worker");
            } else if (registration.waiting) {
                console.log("Service worker instalado");
            } else if (registration.active) {
                console.log("Service worker activo");
            }
        } catch (error) {
            console.error(`Falló el registro con el ${error}`);
        }
    }
};