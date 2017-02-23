/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["en/agenda.html","6f0622da4a6eeb387f74e193415533ca"],["en/cod.html","49729cd293d43d89b27213c0c78c26e3"],["en/credits.html","14a9f77b4c17b8bef29bfa5c2ead6f4d"],["en/faq.html","5db4f6573f211fc238378d9e6e33e7c5"],["en/index.html","14ad6d5c188272f36005381d1b077ad5"],["en/pratique.html","192eb93ee14a753be778151939704931"],["en/presse.html","0555b20c068dc24bd4ba06e4336db2d3"],["en/session.html","d6516d8b3c959b90f9364ef2f2652154"],["en/speaker.html","5ba74222793987174d07348bbb34e25c"],["en/speakers.html","88099db990da8831ca21449a2779c528"],["en/team.html","df4f4973aa1a7a833cdfa718e6c3dd7b"],["images/2015/ambiance2.png","1e205c25a681c607415e9c5634aef367"],["images/2015/benevoles.png","9bb3d130a16681264e8306ee7ef8786a"],["images/agenda/after.png","98905f4f0337c7c35a13c649726e2b8c"],["images/agenda/closed.png","dfdc2f335d09bd12d9ef0c52ce9dfdc4"],["images/agenda/coffee.png","c70f31d80efce24d5a53a774132f3593"],["images/agenda/eat.png","5213d6d924cd080f8c7935d362abbdbd"],["images/agenda/open.png","1517d32cf89f49207b46a284d9a385c4"],["images/background.jpg","66190d1a753631934ee4640f19ab3deb"],["images/cite/background.jpg","83d4d62b402fc407634335942d2aaf72"],["images/cite/indoor_map.png","f4763dc0c466d813c59ac2136b0967ee"],["images/equipe/aymeric.png","14ebcecd1d36ed775f9e970b368d42d6"],["images/equipe/background.jpg","04d9dca1f233cfa40f7d19459c3f79cc"],["images/equipe/ben.png","d4c769260cf36c0bfa289b052a70890f"],["images/equipe/jef.png","84219f3ca11a7767bf4e4c3ffad3b41c"],["images/equipe/ju.png","2fcc0892cfd4c854ea4aa25bc1ce8621"],["images/equipe/pierrick.png","b42223e89c94b69a3ebfefdd8705d16d"],["images/equipe/xav.png","631c540d390e2a25ae4006999be6a891"],["images/flags/en.png","aca9fb1bc6e1be5b483d8b9e53d97c75"],["images/flags/fr.png","fac30209aa6284e23550b171eccbfc7b"],["images/gdev.png","d27ba04f224812e75f49b880a17573a8"],["images/gdgnantes-small.png","5bd5fc9a2d606bfad1e208201adbe198"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/hi-res/aymeric.png","0a7f238f3b253d1003db728f6c47049e"],["images/hi-res/ben.png","aba04bed1e0b83caa32e45dadf62c58a"],["images/hi-res/jef.png","9b648f07721cef1c6144ba313ed432c7"],["images/hi-res/ju.png","8549b4aba7d2db2e3c7419abb4886805"],["images/hi-res/pierrick.png","a2e6620bc23f3b2d9d0bc30bfa240d6a"],["images/hi-res/xav.png","f06af34c3c2feb18ba9afe751aff3514"],["images/lego/brick_simple_blue.png","8b96cf5977f4bf3e12a011ee8b3812af"],["images/lego/brick_simple_green.png","e2987e926424e8e7ed592152a45729a9"],["images/lego/brick_simple_red.png","a7d16d11924639ef014efb25de02d635"],["images/lego/brick_simple_yellow.png","533ef93febc40acb12f6624e80e100cf"],["images/lego/lego_computer.png","2069da45a7354878fd5a40184230709e"],["images/lego/lego_geek.png","6e750a5db9f54210cdb7f97a4d37ecbd"],["images/lego/lego_happy.png","ca504671f4b87426ee03671266c5eb59"],["images/lego/place.jpg","bb5d2c2391273fe89097c837cdadda8f"],["images/logo-title-white.png","0ce02477424c5bef76f525eeee369cee"],["images/logo-title.png","e8548b02bde40adb661515b42f560b2c"],["images/meetup-logo.png","f464625b6eeef6cbd13ba0a3b9fecb8e"],["images/sharing.png","af00e50857df764355f168928a1a7a92"],["images/social/facebook.png","7700994c0cb36746ec9085087d8ad29f"],["images/social/flickr.png","92009dd5e4647a72a6dcf47770b2174d"],["images/social/gplus.png","dbe835bc5da169fb1f7a4c13899d34a6"],["images/social/linkedin.png","0cac867378c45c2b3ed76249cfa4acf4"],["images/social/sprites.png","56670ed88e3fe49aff4847ae8cde5a12"],["images/social/sprites.svg","4d063ba91192647e6242766db7c75e1e"],["images/social/twitter.png","c3e287894054c3377d5484c94487d063"],["images/social/youtube.png","6d2461f9fc666fe833878375b7e1a9bf"],["images/speakers/abonneau.jpg","56ff41e41b32d14060479817d3bc4b81"],["images/speakers/acellier.jpg","55f799d89989e9bb4a8ca1a729dbe6dc"],["images/speakers/bfontaine.jpg","451614d31aa45343ceddb18eef825301"],["images/speakers/bpetetot.jpg","1d3ae10c6f3dae28b722a615e3d7f535"],["images/speakers/default.jpg","fba43701d485f3b658efc4755d667213"],["images/speakers/ebriand.jpg","f8aae69219743d4fb6db829ca9666564"],["images/speakers/fjuif.jpg","81d7da9d833647a7a35faf81f24b5783"],["images/speakers/gmembre.jpg","dc904fabbedf33110001b4f01f228173"],["images/speakers/hwood.jpg","e49a3455b6e765f02aef9001a394f84f"],["images/speakers/jlandure.jpg","75bd745ba586d44a7965e950f1124c7a"],["images/speakers/mbernardeau.jpg","4255b04745dd870922f355cc6acfb275"],["images/speakers/vmenard.jpg","c09e2c108799c2fe2bb9bea28ba9cd07"],["images/speakers/yfrin.jpg","d70726843efbc7db529fd238b8ae3277"],["images/sponsors/accenture.png","578c6567c21aab80f80811410fd26432"],["images/sponsors/apside.png","bd947c7287962e73b66a164a28add04f"],["images/sponsors/asi.png","81ed72bdfd0d8bd0a9b0a57cd00feec6"],["images/sponsors/beapp.png","8c4594666680d9ddc84222921f371a02"],["images/sponsors/beemoov.png","52cfc2737c7606960dd14784805040ed"],["images/sponsors/cap.png","07b91be21b638d1deb602d37dca4f635"],["images/sponsors/catamania.png","6ae069a4ac6a7717fea917d799904918"],["images/sponsors/chooseyourboss.png","166d42cba4db1bf49e168ecdddf697e3"],["images/sponsors/conserto.png","e6b9b907fa561675420d307a6b2fece4"],["images/sponsors/creative.png","e6943582592a8dbbc769bf1079845931"],["images/sponsors/edoceo.png","2b3de16dacc44ac96f3b38f3804bbcc1"],["images/sponsors/epitech.png","59acea5bb28da99a191feae19d3fee77"],["images/sponsors/externatic.png","c5d3aecc175eb4e47bbb1a6a82129a1b"],["images/sponsors/gfi.png","db524eb9c3fa76048ab67b3257f3640b"],["images/sponsors/github.png","80fb94da750d9c1bec7ea49bb33e2692"],["images/sponsors/google.png","953ca6652bbc231b3c47abb45ada6c3e"],["images/sponsors/lafourchette.png","3163c5b8289d282c92ad3d3137db162e"],["images/sponsors/mozilla.png","1343b16442bc489ae23b91eb3965ba53"],["images/sponsors/mstream.png","c08b159c09bb9e0f71d8dc960031afdf"],["images/sponsors/nantestech.png","faaa2f24160156e95b2a6a95a17972d1"],["images/sponsors/nantestech_hires.png","d6dd2e22ea97a6d4d270ca5be7d2a14f"],["images/sponsors/neosoft.png","8cf5f7bbbf8b80798e24896995252821"],["images/sponsors/netapsys.png","d83a32919330cef8f96c2a1160de67ad"],["images/sponsors/onepoint.png","6718ee122fe1181213284ceea9f68754"],["images/sponsors/open.png","d7a087456f9a1ea639944bd1ba24cdf4"],["images/sponsors/remy_chautard.png","4c3fbe7e613d9562fb6f4713c04cb3b1"],["images/sponsors/residhome.png","c09df7688f21640d01e5a2d7a340f0f5"],["images/sponsors/seyos.png","270afc3e83ee85cfdc68b146d795f412"],["images/sponsors/sii.png","f215081009c430a8d38f13fb9de20e99"],["images/sponsors/softeam.png","7fb965686818eadb1e3b3cc92c047f18"],["images/sponsors/sogeti.png","a9da0d4c29395ede4a8c03f05f15efaa"],["images/sponsors/sopra.png","41cc9cfbda7af0ff7811098dcbde78ed"],["images/sponsors/sparklane.png","f984ddd8d50924ac01584fc141383775"],["images/sponsors/sqli.png","354a8584d025cd338710ea0bec6178df"],["images/sponsors/talend.png","2d78ab3e5bb0573027348da5607204f3"],["images/sponsors/vif.png","9506c73cc92342a5a0c87f34a052ca35"],["images/sponsors/zenika.png","1363c5fd91a9b15c378029e44a60acd8"],["images/title.png","fc72ec6fe29191ae1085995e15b5190a"],["images/touch/apple-touch-icon.png","9d4963342010ad6076059c669a13232f"],["images/touch/chrome-touch-icon-192x192.png","89371ba09a73e7e2f22948c588d5e706"],["images/touch/icon-128x128.png","d276d6c8222abfc923fbd7626e05e78b"],["images/touch/icon-400x400.png","e6658bc1229dfb977ea32b85bbb28e5e"],["images/touch/ms-touch-icon-144x144-precomposed.png","a0ddc3a2137787e108ff4b2452ac66c6"],["images/tz-logo.png","e86f579694c10c1d9b3838d43e850c3c"],["index.html","3481c828abe9b5287d038e537cd9f536"],["pratique.html","1ccca64e23374d81d9c3ae0f9cd9784f"],["redirect.html","62a285498dce7fd59258ec2529122986"],["scripts/main.js","a37c119485313e4751dee96e57340326"],["scripts/material.min.js","d8f93ed01ebd59371f8095ad84eaf05e"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["session.html","30ba4532853754bbac441abfc59809da"],["speaker.html","f991e762cbf4d4c8d0ca45a98e4eff5a"],["speakers.html","daa61a11c516764d8ec09fb05ef225d7"],["styles/app.css","56e8985aea1715ca3632b35fcc789460"],["styles/material.indigo-red.min.css","db4185c6d5ee59f7d426baa553469db5"],["styles/socials.css","f495f8be771dca61728be7d5b16da0bc"],["styles/webstarterkit.css","0d4ac573f0549abe7ed112a6d050e788"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

