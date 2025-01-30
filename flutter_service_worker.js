'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "552914da31b2a3ba7ff4a746811976cd",
"assets/AssetManifest.bin.json": "e1b391c4f5d398ae0b206dce36877165",
"assets/AssetManifest.json": "1de9457001f5135139d2686e8ba8e76d",
"assets/assets/images/app_bar/bentonit.png": "b89c089f9922dc36423465a7f8f07eac",
"assets/assets/images/app_bar/fuarlar.png": "c18e71f88d5f4b0be56d8b00d1ae047a",
"assets/assets/images/app_bar/iletisim.png": "998282f80d16878777178dea0bedcaeb",
"assets/assets/images/app_bar/mavi_logo.png": "037c5d835104184e8fd0470013f7ab7d",
"assets/assets/images/app_bar/products_image.png": "5478cb3937e206ed83f6c6c6953ad788",
"assets/assets/images/app_bar/your_brands.png": "c357a8599408eda7c64038b77cc411e4",
"assets/assets/images/banner/kedi_kumu.png": "9cf8bb3936ddfc4605da4fb93df68b6d",
"assets/assets/images/bentonit_ozellikleri/ozellik1.png": "1ec274c6940575901720cf3870f5034d",
"assets/assets/images/contact/harita.png": "c9f607bd8224752ee2cec3fa988f7fe6",
"assets/assets/images/contact/iletisim_image.png": "f6c44a8b5d80cea0a571241ff3198d58",
"assets/assets/images/contact/mobile1.png": "4402f324e918ba66be59f8d871cfebfd",
"assets/assets/images/footer/call.png": "a2e1a768bfc944020f97c6bc13ae159d",
"assets/assets/images/footer/facebook.png": "fae177e88f5c9a807a2c9dd4115e9dd4",
"assets/assets/images/footer/instagram.png": "736d7ee44f389a64f5850fc8e4c34334",
"assets/assets/images/footer/location.png": "8fd3d16cb7972e5d6ff78766e4f4e29f",
"assets/assets/images/footer/mail.png": "80692a78a8e10c4e78dc10e38c1e6d29",
"assets/assets/images/footer/twitter.png": "a7a4dd4113000b17e9ab6bead3668834",
"assets/assets/images/footer/youtube.png": "992ac2a3658129cd833318d0531830df",
"assets/assets/images/fuar_ve_etkinlik/fuar_example.png": "f3c27b1931da5a9cd46d74c6c2b9b5ef",
"assets/assets/images/fuar_ve_etkinlik/fuar_example2.png": "1b9e74fd5f2f51d77906eeb42c1d4de3",
"assets/assets/images/ithalat_ulkeler/dunya_haritasi.png": "bbf575b03429aba4287c2e516f112e64",
"assets/assets/images/products/agirlik1.png": "23d6c686a4741914c3d3093d9f318189",
"assets/assets/images/products/agirlik2.png": "0493143000e70055743b46ed5d38cf55",
"assets/assets/images/products/agirlik3.png": "4c6fbb194b2008ad95c074e38856ba26",
"assets/assets/images/products/example.png": "e9b76b4977217c64ea0f2921a0d982fd",
"assets/assets/images/products/example2.png": "a6d444aaea811492ccc85e4e9a52aea2",
"assets/assets/images/products/friends/friends_babykarbon.png": "544d377ee6691cd081bcaff822d3967e",
"assets/assets/images/products/friends/friends_karbon.png": "250a6a1f540bd38fcedbea8ce22489bb",
"assets/assets/images/products/friends/friends_lavanta.png": "528808c5bb160c0c8ab5fb56259eb8ab",
"assets/assets/images/products/friends/friends_marsilya.png": "1eff56fcf563511424a2e5cdeae7ffa8",
"assets/assets/images/products/friends/friends_naturel.png": "6d9ef892b45997526d2d9ad77b9b8a55",
"assets/assets/images/products/friends/friends_sakura.png": "36e883c24f1de2cf69ff09638e56338d",
"assets/assets/images/products/s_and_b/s_and_b_kirmizi.png": "a6ad7d58f75103368304930e7ccbd4a7",
"assets/assets/images/products/s_and_b/s_and_b_mavi.png": "16b3ce4da9c7be981ccc245175de8104",
"assets/assets/images/products/s_and_b/s_and_b_mor.png": "98dd089c92c1f528610be3d6dee360cc",
"assets/assets/images/products/s_and_b/s_and_b_sari.png": "8cf6322dee7dd2b1738651304e1cd3db",
"assets/assets/images/products/s_and_b/s_and_b_yesil.png": "5a512686ee8f28117c1153224bc11f28",
"assets/assets/images/products/ultra_emici_ozellik.png": "47428c3a86a59298759e2ea9100220bf",
"assets/assets/images/your_brands/ambalaj_tipi.png": "a60832ea04d3a94f221cdb5e4e71d852",
"assets/assets/images/your_brands/kum_example.png": "21313b303a89d2fc7a516b4198ff84ef",
"assets/assets/images/your_brands/kum_olcusu.png": "a6360ac2dc48d417442c8be987398429",
"assets/assets/images/your_brands/kum_parfum/aloe_vera.png": "f84a01e4b3e22908bba452ac7a225561",
"assets/assets/images/your_brands/kum_parfum/badem.png": "41aeffb842ffbc80abe2408c004b0a12",
"assets/assets/images/your_brands/kum_parfum/bebek_pudrasi.png": "5ad655732477b64f9da60a366db393eb",
"assets/assets/images/your_brands/kum_parfum/cam.png": "f935f1136688d4475900576e8447f498",
"assets/assets/images/your_brands/kum_parfum/gul.png": "b8061ac74075c418cda46627294cb4db",
"assets/assets/images/your_brands/kum_parfum/image-13.png": "f323a0936b6204649b39b1130bf83d03",
"assets/assets/images/your_brands/kum_parfum/kahve.png": "4c6a5a387d4c7cd2bbbf79c67cee49dd",
"assets/assets/images/your_brands/kum_parfum/kavun.png": "861a5ec515dd5abce3887ba3a2758713",
"assets/assets/images/your_brands/kum_parfum/lavanta.png": "43ee58b84b97f418b25b96bf7c1ad673",
"assets/assets/images/your_brands/kum_parfum/limon.png": "09f0d16aa7cada4bb35b5f595df7d53b",
"assets/assets/images/your_brands/kum_parfum/marsiyla_sabunu.png": "774fa7054abeb082256d1ce1698ca92b",
"assets/assets/images/your_brands/kum_parfum/okyanus.png": "0b3d6ad6c65673ab24dc6de8b70226ac",
"assets/assets/images/your_brands/kum_parfum/sakura.png": "a73a2c2a98828575a84534e11334c552",
"assets/assets/images/your_brands/kum_parfum/tazelik.png": "350099a5717a383a03d990675d282583",
"assets/assets/images/your_brands/kum_parfum/vanilya.png": "9f79fa4c43907bc13a028424de829243",
"assets/assets/images/your_brands/kum_parfum/yasemin.png": "aac60d5c5347195f8786787e50bcf644",
"assets/assets/images/your_brands/kum_parfum/yesil_elma.png": "2eea2df2f8fc1cdf570b502c8cca357e",
"assets/assets/images/your_brands/kum_parfumu.png": "c86f847165a37b63224fc55fb4c38007",
"assets/assets/images/your_brands/kum_rengi.png": "a7f7c3300fde06b21539b7d13b51e70a",
"assets/assets/images/your_brands/kum_renk_example.png": "b00b8ed6ddc304fd140170c563f9866f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f2489b886f45f36b6e3d6b24345c09da",
"assets/NOTICES": "72ddd9311f551dbaefcb564b999c1aeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "7c5f122577e2468c18bcc2d52527aa99",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5989c63958adaa87e2033598f6ea8a49",
"/": "5989c63958adaa87e2033598f6ea8a49",
"main.dart.js": "5811dee45ad2206d050c0699eed8a096",
"manifest.json": "d4cdeb83e1153518edf7fc372784f7ae",
"version.json": "13b7cd0b11f284f332af2dbae983970c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
