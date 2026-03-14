addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Static site delivery via Cloudflare Pages; if using Workers Sites,
  // Wrangler handles the public/ folder automatically.
  return fetch(request);
}
