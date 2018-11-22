/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fc0c057eb94d474384014aec47d930ef"
  },
  {
    "url": "assets/css/0.styles.49a39d2d.css",
    "revision": "3791596f330ef059ece4668e530b728f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b2543e5.js",
    "revision": "1c8f4448f66f00dd936ece3cb4063574"
  },
  {
    "url": "assets/js/11.8ef4c094.js",
    "revision": "096c911a0165d8d7fce28f9437e2e824"
  },
  {
    "url": "assets/js/12.3017ff48.js",
    "revision": "0df16d8f9ad6e7705e2daa876bb585a4"
  },
  {
    "url": "assets/js/13.8adfaca3.js",
    "revision": "cf968b964d7a8dd817c5c07c52393010"
  },
  {
    "url": "assets/js/14.03cc5987.js",
    "revision": "fb1ffc6832ef33fd496324145f7732db"
  },
  {
    "url": "assets/js/15.10fea583.js",
    "revision": "e34a71ed679f5f8f95d26bdc35ef71c5"
  },
  {
    "url": "assets/js/16.676b7209.js",
    "revision": "a4701e7e16bda3f910ca3fe69ac82b1e"
  },
  {
    "url": "assets/js/17.b73a5484.js",
    "revision": "571639bb33fe5587143f44b5cba5ec7c"
  },
  {
    "url": "assets/js/18.6e8bd1dd.js",
    "revision": "198e3a58f638bc83be090f7767504928"
  },
  {
    "url": "assets/js/3.ac5f44be.js",
    "revision": "6f20916be9840cd6721c0ff4a9e712a4"
  },
  {
    "url": "assets/js/4.bfb94aa3.js",
    "revision": "3138e7f00c427a19a0271f44d849c130"
  },
  {
    "url": "assets/js/5.7dede233.js",
    "revision": "0cb45582d752f806bda714494a5a7261"
  },
  {
    "url": "assets/js/6.f55d80d9.js",
    "revision": "c9b15d1e2e9adb3ed44fc770ad000515"
  },
  {
    "url": "assets/js/7.f1347943.js",
    "revision": "9e08a204f615cc5f67f5dcb8ef13e119"
  },
  {
    "url": "assets/js/8.40601138.js",
    "revision": "fbba0029355910f436cbf989adc36a1b"
  },
  {
    "url": "assets/js/9.45860bc7.js",
    "revision": "80440b28881e5f6636bea4e895675df6"
  },
  {
    "url": "assets/js/app.f9104f2a.js",
    "revision": "6d53ed2d8e501210b93e4fad31e53dd6"
  },
  {
    "url": "assets/js/vendors~flowchart.8bb8ff62.js",
    "revision": "1e5fc9619ca44969698b3594aed2ccae"
  },
  {
    "url": "favicon.png",
    "revision": "bb4f91e5db6114ac047aef54a747ec7e"
  },
  {
    "url": "guide/configuration.html",
    "revision": "c24fd4b75d6a848561577ed1166316ad"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "4529698fb93f2226b4278694672f9023"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5b8ebf151ebb702ce89fd41f7e7c4697"
  },
  {
    "url": "guide/hook.html",
    "revision": "681ad75c5089499705e1f51ccf8bde53"
  },
  {
    "url": "guide/index.html",
    "revision": "1dae5645cce196d207edf8142ce2041e"
  },
  {
    "url": "hero.jpg",
    "revision": "586e1a71083e8407bf37bc231f301795"
  },
  {
    "url": "index.html",
    "revision": "a624801f8aa63f5a5d1e80e49aac8955"
  },
  {
    "url": "reference/api.html",
    "revision": "dd6c3bdf9448e352318d00d79c9e0bb1"
  },
  {
    "url": "reference/plugin/index.html",
    "revision": "671383d9aa3d98f8ce20e35544ce38ff"
  },
  {
    "url": "reference/plugin/official.html",
    "revision": "04c834ea6549e3c14f5ee04269b88107"
  },
  {
    "url": "reference/plugin/publish-plugin.html",
    "revision": "8947bf6cd1bfb78b9859bae40020ef66"
  },
  {
    "url": "reference/plugin/using-plugin.html",
    "revision": "1e7e9cb74b58190d8a45d6195a3855ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
