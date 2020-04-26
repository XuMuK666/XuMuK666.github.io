// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

 importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '390667823333'
});

const messaging = firebase.messaging();
