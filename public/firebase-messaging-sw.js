importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCF5B5GVYYgMuUNgiamOizYA4rQ0SWrqWs",
    authDomain: "space-x-aec4a.firebaseapp.com",
    databaseURL: "https://space-x-aec4a.firebaseio.com",
    projectId: "space-x-aec4a",
    storageBucket: "space-x-aec4a.appspot.com",
    messagingSenderId: "1099463887380",
    appId: "1:1099463887380:web:39c1271eff18d89311f501"
});

firebase.messaging();