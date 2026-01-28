// 1. กำหนดชื่อ Cache (***สำคัญ: เปลี่ยนเลขเวอร์ชันตรงนี้ทุกครั้งที่มีการแก้โค้ด เพื่อให้เครื่องลูกค้าอัปเดต***)
const CACHE_NAME = 'finance-manager-v8.1.9';

// รายการไฟล์ที่ต้องการให้จำไว้ในเครื่อง (เพื่อให้โหลดเร็วและใช้ Offline ได้)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  
  // CDN Libraries (เพื่อให้หน้าเว็บสวยและทำงานได้แม้เน็ตหลุด)
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0',
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js',
  'https://unpkg.com/@panzoom/panzoom@4.5.1/dist/panzoom.min.js'
];

// 2. Event: Install (ทำงานเมื่อติดตั้ง Service Worker ครั้งแรก หรือเมื่อเจอเวอร์ชันใหม่)
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing new version:', CACHE_NAME);

  // *** หัวใจสำคัญของ Auto Update ***
  // สั่งให้ Service Worker ตัวใหม่ทำงานทันที ไม่ต้องรอให้ปิดแอป
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 3. Event: Activate (ทำงานเมื่อ Service Worker ตัวใหม่เริ่มทำงานจริง)
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated');

  // ลบ Cache ของเวอร์ชันเก่าทิ้ง (เช่น ลบ v1 ออกเมื่อ v2 มา)
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  // สั่งให้ Service Worker เข้าควบคุมหน้าเว็บทันที
  return self.clients.claim();
});

// 4. Event: Fetch (ดักจับการโหลดไฟล์ต่างๆ)
self.addEventListener('fetch', (event) => {
  // ข้ามการ Cache ข้อมูลจาก Firebase/Firestore (เพราะข้อมูลต้องสดใหม่เสมอ)
  if (event.request.url.includes('firestore.googleapis.com') || 
      event.request.url.includes('googleapis.com/auth')) {
    return;
  }

  // ระบบ Cache First: ดูในเครื่องก่อน ถ้าไม่มีค่อยโหลดจากเน็ต
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // เจอใน Cache ใช้เลย
      }
      // ถ้าไม่เจอ ให้ไปโหลดจากเน็ต
      return fetch(event.request).catch((error) => {
         // กรณีไม่มีเน็ตและไม่เจอใน Cache อาจจะ return หน้า Offline page ได้ (ถ้ามี)
         console.error('[Service Worker] Fetch failed:', error);
      });
    })
  );
});