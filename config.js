// config.js
// ============================================
// ไฟล์รวมค่าคงที่และการตั้งค่าต่าง ๆ ของระบบ
// ============================================

// Firebase Configuration
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBU9M5C5Q6yIdlvjEQsUpxcYOjHKV_JRc4",
    authDomain: "fmpro-d66c3.firebaseapp.com",
    projectId: "fmpro-d66c3",
    storageBucket: "fmpro-d66c3.firebasestorage.app",
    messagingSenderId: "1046027421115",
    appId: "1:1046027421115:web:333a51f45fbf09c556309e",
    measurementId: "G-KGGDYWYGNM"
};

// LINE Integration
const LINE_CONFIG = {
	//Beta Version
    //OA_BOT_URL: "https://line.me/R/ti/p/@473mwbfr", // URL สำหรับแอดเพื่อนบอท
    //NOTIFY_GAS_URL: "https://script.google.com/macros/s/AKfycbxPpU4YA-L6a5FH0dG6xb9u52gxxbuc5zBlWWkQg2DMDbMRwGNyCn-k4ISPPYRPtRw_/exec", // Google Apps Script สำหรับส่ง LINE Notify
	
	//Full Version
    OA_BOT_URL: "https://line.me/R/ti/p/@660yvqhj", // URL สำหรับแอดเพื่อนบอท
    NOTIFY_GAS_URL: "https://script.google.com/macros/s/AKfycby1kYAHmnhoPQw3_aW1gvzXDM1QdBXSYAgjT0zUaXmE_UvntboXXMzOZGu_gMob3uzuOg/exec", // Google Apps Script สำหรับส่ง LINE Notify

};

// รหัสผ่าน Master (สำหรับการกู้คืนฉุกเฉิน)
const MASTER_PASSWORD_HASH = '90b7a8f04fb00f2cf16545e365f4da47ace5446c49ced401d843b3f9e79efc09';

// ค่าคงที่อื่น ๆ (ถ้ามี)
const APP_DEFAULTS = {
    DEFAULT_PASSWORD: '1234',
    DEFAULT_FREQUENT_ITEMS: ['กินข้าว', 'รายจ่ายทั่วไป'],
    COMPRESS_MAX_WIDTH: 1024,
    COMPRESS_QUALITY: 0.7,
    MAX_FILE_SIZE_MB: 100,
    AUTO_LOCK_DEFAULT: 10,
    SUGGEST_FAVORITE_THRESHOLD: 3
};

// Export ให้ window เพื่อให้ script อื่นเรียกใช้ได้
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.LINE_CONFIG = LINE_CONFIG;
window.MASTER_PASSWORD_HASH = MASTER_PASSWORD_HASH;
window.APP_DEFAULTS = APP_DEFAULTS;