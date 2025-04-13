'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "598f8b8ae37b8aaaf185e70dc54ddce9",
"assets/AssetManifest.bin.json": "fbaa5b520905dd1695190660b8507c61",
"assets/AssetManifest.json": "39d8dabefb6d38af40a25fa02cdeaaa4",
"assets/FontManifest.json": "5716a8201e6a7dba257e3d6a56e1c540",
"assets/fonts/Cairo-VariableFont_slnt,wght.ttf": "d5664f46ff376cb597c2e18ec22f9b38",
"assets/fonts/MaterialIcons-Regular.otf": "eb50d1614e8c31ae86d575fd40bf71b6",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/images/amazon.png": "e9daac0328c83e31f9efe329b0fce477",
"assets/images/avatar.png": "4903aff3a9392aadbfcf597f2d484ecc",
"assets/images/back.jpg": "55ae8fbe32615498977bb7916569d600",
"assets/images/blackback5.png": "805c2e185e25b42bfa040e0f4127cbd6",
"assets/images/BNET.png": "f9b8010b83c501e637b2eea3206af86c",
"assets/images/ekey.png": "175cfe0fb0f0fcc243ab72ab6bd13eb2",
"assets/images/EWA.png": "570353226290620c0111ffaa9cc962cc",
"assets/images/gcc%2520cup%2520banner.png": "a30bf75d661bb129f92e0c4cef9c4c8d",
"assets/images/how.png": "8f8d93d0e646d3b5040568cd5b8f3edb",
"assets/images/jahez.png": "4e0fa16a29059075a99c26431d98dee8",
"assets/images/login.png": "f1d89bc2cfbf12c457202b2f60bc786f",
"assets/images/logo.png": "caa2bdda3bb8b1485003b6250aef8b15",
"assets/images/mission.png": "0f651fc31fa06ee4f9b6dd0feb30dced",
"assets/images/MOW.png": "874003e2df7feb6f0e353a47214cb819",
"assets/images/netflix.png": "f5b29fff2398b627c879b3c3ad9fee64",
"assets/images/robot.png": "3dcd2d7d952618c768e92ad3799d2f66",
"assets/images/shahid.png": "907e934828ed7f15a7ae5e0491c1caf2",
"assets/images/shein.png": "f5cc5e628eed04352abc6b94bd551127",
"assets/images/sony.png": "abefc7c96ed45f5e633862a8d745097e",
"assets/images/spotify.png": "e4684d83ba2e2a5db4540127590a13e1",
"assets/images/steam.png": "9f553831a9dc43dcabde3d8cc82bd3f4",
"assets/images/Ticket.png": "a6b746a68b4e66de19ab4016df565569",
"assets/images/vision.png": "b0edc57bee7e7d03ab0003e57dbfd019",
"assets/images/what.png": "0a54d4df7ff37e5a3585a606e8c15eee",
"assets/images/why.png": "7c3cc4fe4cb909e514b75a10a7687f3b",
"assets/NOTICES": "bd71218dc3bbd91711c130ba7bd6a507",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "782005108a9c3e341dddc1cced2645ed",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ef6cebd080532cd564582529cd769361",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "c4a416d7cef2c4c73fdd26dcb7b06cc9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d48d08244021fcc94b5e17b40a3ec460",
"icons/Icon-192.png": "5ac0de84c6881b510e629e803fd2d208",
"icons/Icon-512.png": "ca17156950859315780076c6b0b7913d",
"icons/Icon-maskable-192.png": "5ac0de84c6881b510e629e803fd2d208",
"icons/Icon-maskable-512.png": "ca17156950859315780076c6b0b7913d",
"index.html": "ff23888615e1ac195f3761dd4cae332e",
"/": "ff23888615e1ac195f3761dd4cae332e",
"main.dart.js": "e71ccea0295501f29097aec0c54f3b71",
"manifest.json": "fa94781723f652af9075318bc6bdf77f",
"version.json": "e43599c81724a477b64ce4f06e357d3c"};
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
