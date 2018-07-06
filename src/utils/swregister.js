/**
 * Registers our Service Worker on the site
 * Need more? check out:
 * https://github.com/GoogleChrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
 */

const Config = require('./config');

if (!Config.DEV && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      // If Successfully Register Service Worker
      console.log(
        '%c Service worker was successfully installed. Now you can access even when you\'re offline',
        'background: #ddd; color: green; padding: 20px'
      );
    })
    .catch((e) => {
      throw ('Error during service worker registration:', e);
    });
}
