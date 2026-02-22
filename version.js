// version.js
// ============================================
// เวอร์ชันและสถานะของแอปพลิเคชัน
// ============================================

// เวอร์ชันหลัก
const APP_VERSION = 'v8.5.9';
const APP_LAST_UPDATED = '22-02-2026';
const APP_LAST_UPDATED_TH = '22 กุมภาพันธ์ 2567';

// สถานะของแอป (แก้ตรงนี้ที่เดียว!)
// - 'Beta'  ➜ จะแสดง (Beta)
// - ''      ➜ ไม่แสดงอะไรเลย (สำหรับเวอร์ชันเต็ม)
// Beta Version
//const APP_STATUS = 'Beta';
// Full Version
const APP_STATUS = '';

// ชื่อแบบมีวงเล็บ
const APP_STATUS_DISPLAY = APP_STATUS ? `(${APP_STATUS})` : '';

// ชื่อแบบสั้นสำหรับ manifest (ไม่มีวงเล็บ)
const APP_SHORT_NAME = APP_STATUS ? `FMPro${APP_STATUS_DISPLAY}` : 'FMPro';

// Export ไปยัง window
window.APP_VERSION = APP_VERSION;
window.APP_LAST_UPDATED = APP_LAST_UPDATED;
window.APP_LAST_UPDATED_TH = APP_LAST_UPDATED_TH;
window.APP_STATUS = APP_STATUS;
window.APP_STATUS_DISPLAY = APP_STATUS_DISPLAY;
window.APP_SHORT_NAME = APP_SHORT_NAME;