addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // statički site je posredovan iz ./public putem Workers Sites
  // za /api možeš dodati rute i API obradu ovdje.

  // Ovaj worker ostavlja request default site handleru.
  return await getAssetFromKV(event); // ova funkcija se koristi samo sa Workers Sites konfiguracijom
}
