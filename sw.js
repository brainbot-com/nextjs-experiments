if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/My6X9qnbE8XJ7tISu9TPQ/_buildManifest.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/My6X9qnbE8XJ7tISu9TPQ/_middlewareManifest.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/My6X9qnbE8XJ7tISu9TPQ/_ssgManifest.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/169-425b16ff0f0ec983.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/54f2b1d2-378a7737d56d3536.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/933-05dab927378c5f9d.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/bc387120-7eb2220cd8d139a3.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/main-fafb36c153b798bf.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/pages/_app-e592b9dd35336b2e.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/pages/checkout-060552d7b3321fe1.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/pages/index-0379dc4ef9a3562c.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/pages/processPayment-3cc45b79403b831d.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/chunks/webpack-58a20afdda0f6923.js",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/css/0352580f743b983a.css",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/css/13f1dd6a4a4f6ef3.css",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/css/46bee2fec94439f8.css",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/_next/static/css/cecb1a5589aba9be.css",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/assets/icons/icon-128x128.png",revision:"71fc7c7b3a47c69ae4a1bfbd220ca0e8"},{url:"/assets/icons/icon-144x144.png",revision:"89d59270e3ceec07588e1a6c34fb8ac9"},{url:"/assets/icons/icon-152x152.png",revision:"68990ffb6b4d146bc6638e3b1c04c3b9"},{url:"/assets/icons/icon-192x192.png",revision:"615a9b467732768256c56bd318193b24"},{url:"/assets/icons/icon-384x384.png",revision:"f719efcfceb82df8a3ab5596c3e4fae1"},{url:"/assets/icons/icon-48x48.png",revision:"d976ea2bf12587a735513afa4e32289f"},{url:"/assets/icons/icon-512x512.png",revision:"98d5269e728334b38a62e857bd884dca"},{url:"/assets/icons/icon-72x72.png",revision:"e58480343b661c7b3bad815be9c23f5b"},{url:"/assets/icons/icon-96x96.png",revision:"500eae255e925f40fc5c04929617e099"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/grain.jpg",revision:"f9af4a050c06068f66fd0ccd0eaad1ec"},{url:"/images/icon-pwa.jpg",revision:"933ede4a7d82ef643c4ead5f5514f99e"},{url:"/manifest.json",revision:"7fabc0cde1d57ee5ea601a5dabaff75d"},{url:"/nextjs-experiments//_next/static/media/grain.9bf723da.jpg",revision:"My6X9qnbE8XJ7tISu9TPQ"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
