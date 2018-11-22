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
    "revision": "84a25c2f421f4a255ac17f3c48a12691"
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
    "url": "assets/js/10.76127216.js",
    "revision": "a4198aaea7e18a6b7495d9b6725ef50e"
  },
  {
    "url": "assets/js/11.402f3dae.js",
    "revision": "12027d8cb02e7b007db9b989dd6cdbc3"
  },
  {
    "url": "assets/js/12.3017ff48.js",
    "revision": "0df16d8f9ad6e7705e2daa876bb585a4"
  },
  {
    "url": "assets/js/13.af93b74e.js",
    "revision": "ec601f3a97d241325949fde97641758f"
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
    "url": "assets/js/3.3cfef083.js",
    "revision": "026fc6b8005bccb697331eab016fc3fe"
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
    "url": "assets/js/7.5a9b8557.js",
    "revision": "db305e82a96e14a0f1ca14b651525e69"
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
    "url": "assets/js/app.6e7a8da5.js",
    "revision": "79106f962668c3edc063f2fabd0168f4"
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
    "revision": "c71561fb733686b271934641937fa7b7"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ee2a177d3d41706a1ddcd57b50a73ef2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d34947695afd192a489daaa30f96323f"
  },
  {
    "url": "guide/hook.html",
    "revision": "afa1e14388bd21800bb8082f1c56e20c"
  },
  {
    "url": "guide/index.html",
    "revision": "42ac3b7e5569e2e2a2f167b436557abc"
  },
  {
    "url": "hero.jpg",
    "revision": "586e1a71083e8407bf37bc231f301795"
  },
  {
    "url": "index.html",
    "revision": "7d5eedd0d0258a366fd47a1a4258e452"
  },
  {
    "url": "Logo.svg",
    "revision": "568dc623657262d44d0911246852816d"
  },
  {
    "url": "logo@3x.png",
    "revision": "acdc797c28288f54a3674e1881a274a9"
  },
  {
    "url": "reference/api.html",
    "revision": "b0295351e810040464201856e31ad2a2"
  },
  {
    "url": "reference/plugin/index.html",
    "revision": "efc83849604528bd66ca8fa177e83b01"
  },
  {
    "url": "reference/plugin/official.html",
    "revision": "51faee2009c191ff91c6f55994b1f071"
  },
  {
    "url": "reference/plugin/publish-plugin.html",
    "revision": "90ee7c3ffa0df626256f71bc204b72d8"
  },
  {
    "url": "reference/plugin/using-plugin.html",
    "revision": "63cdfb61764da38f398a99960fb3fd32"
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
