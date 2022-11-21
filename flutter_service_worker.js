'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cab253950bd55e9e97fbd5f68f18f26f",
"splash/img/light-2x.png": "340532ae570e645e8d919ff7b9a2d9e6",
"splash/img/dark-4x.png": "cb5ad466c99af2b608177c99be6cafa9",
"splash/img/light-3x.png": "bb547f552ab0744ba0147adc8e0fa38e",
"splash/img/dark-3x.png": "bb547f552ab0744ba0147adc8e0fa38e",
"splash/img/light-4x.png": "cb5ad466c99af2b608177c99be6cafa9",
"splash/img/dark-2x.png": "340532ae570e645e8d919ff7b9a2d9e6",
"splash/img/dark-1x.png": "5f792da6455c6a3388191819b984a47b",
"splash/img/light-1x.png": "5f792da6455c6a3388191819b984a47b",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1ab460716c731597b049ba0a11ff4124",
"index.html": "973889491744a06b57c88c871d76f836",
"/": "973889491744a06b57c88c871d76f836",
"main.dart.js": "5a6ce745dadb148381436e2c428647f1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "583c89129a8cd5535cee966810cf08ae",
"assets/AssetManifest.json": "35cfa928174c30bfed93bacb2c6e60f0",
"assets/NOTICES": "c8c51b20e0a03d30602b6cc593d564c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ed4072ca89767bfe6f35128f047be51e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/icon_gift.svg": "dd7c316aee327802a969e09675a7e62c",
"assets/assets/images/user_lotta.jpg": "73e46a07076ecb6869f3352070bb69d6",
"assets/assets/images/user_eva.jpg": "26e6d40db684b0396519459ba515e4d7",
"assets/assets/images/icon_heart.svg": "2aeaa2a160ea7d336aff6f482784e729",
"assets/assets/images/icon_pif_green.svg": "a533b0c89a6a001d4c9d3bfbacef8502",
"assets/assets/images/user_ahdi.jpg": "c35434befe19961a6f514e743d497f92",
"assets/assets/images/icon_comments.svg": "a2cbe2ae399077d3bd16f11be45c3ae1",
"assets/assets/images/user_mans.jpg": "f649201d3fa566072d728bf044576eaf",
"assets/assets/images/icon_interested.svg": "ebd2295ad3beeb3ed5aaec65757d9b3e",
"assets/assets/images/pif_image_bike.jpg": "000095675cc560a5eaafccc28551fe24",
"assets/assets/images/logo_teal_name_trans.png": "5630884375dbf856529bcb53c1283aa3",
"assets/assets/images/icon_image.svg": "addbee45e4cb64bd4900c5d3aa82df56",
"assets/assets/images/user_amanda.jpg": "adc216ffa1c07350f0274b61eea034d1",
"assets/assets/images/logo_teal_trans.png": "9a3c8744ae4a930ef7bdae9ab57492e6",
"assets/assets/images/icon_pif_green.png": "e10bceaee583ed5a2754d88063e109d5",
"assets/assets/images/icon_sun.svg": "dddcdf6498a8d8bd18f88d4195137bc2",
"assets/assets/images/user_william.jpg": "291d12c79e66d9c07c0eb57cd556bdeb",
"assets/assets/images/user_adam.jpg": "20cf131254c23002eb2da01d006face1",
"assets/assets/images/icon_edit.svg": "cf8ef9f871861ab78f2b3d776ee12d73",
"assets/assets/images/icon_messages.svg": "f8e495b411729a47053ca03811849f01",
"assets/assets/images/user_anders.png": "13cf0c959cbc11bd3cd870bfc62308c1",
"assets/assets/images/user_anne.jpg": "0aae1bedc0084d868276d60ea7b847aa",
"assets/assets/images/user_nils.jpg": "caf3c571074c06dbf9e971aece980b33",
"assets/assets/images/sunriseyoga.png": "523d585f280b88c160146c24a5ad199a",
"assets/assets/images/pif_image_sofa.jpg": "fea1a31826870644145f621b4eee2f4e",
"assets/assets/images/splash_large.png": "adf99059acf16d42d2badabb39d1962e",
"assets/assets/images/user_george.jpg": "6c8a391a532a4adbb2a16d7942437a9c",
"assets/assets/images/icon_bell.svg": "b5ce6d39f11c0de19cd62a5e094cc731",
"assets/assets/images/user_anna.jpg": "f298a856c900f447d823a497dce57b4a",
"assets/assets/images/mapbox_example_view.png": "27705e2742584e409887d9b12d76a1cb",
"assets/assets/images/user_antonia.jpg": "41b7ba38ded1d7fe76fdce7ec4c6592d",
"assets/assets/images/star_mask.png": "87658b17b6fd788a5b9fa0eca52ca019",
"assets/assets/images/icon_camera.svg": "68eae24d0db4e0dbde0c438833b7e269",
"assets/assets/images/star_mask.jpg": "5ac5ab64a74cf534f3859479d8a7e158",
"assets/assets/images/user_jens.jpg": "a72f215dd5bdd216bfaf6816f4f8c961",
"assets/assets/images/pif_image_boot.jpg": "e983bdfbaba9d14c3cf5694e0aa85ce4",
"assets/assets/images/star_outline.png": "1287383fc88ab257e80bebdc190bb246",
"assets/assets/images/mapbox_example_edit.png": "6c54b4932b382cce5782f7bc089ecf7e",
"assets/assets/images/user_emelie.jpg": "0db220d0a7a2988916ad318db6739a92",
"assets/assets/images/icon_home.svg": "5d673e210aaa47ab8c36f2db8a4f9120",
"assets/assets/images/pif_image_wellingtons.jpg": "7eb64f533591a36f262beebce4a3e8af",
"assets/assets/images/user_minna.jpg": "f1e205b930032c58cb97867be7c8c494",
"assets/assets/images/user_lisa.jpg": "0f8c08906354346e236c4af484acd416",
"assets/assets/images/user_annamaria.jpg": "2f95db3dbe117b7444325a86858a68bc",
"assets/assets/images/donut.png": "8d9b175e4bb5c9b9db001dc763662124",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
