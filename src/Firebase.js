import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCF5B5GVYYgMuUNgiamOizYA4rQ0SWrqWs",
    authDomain: "space-x-aec4a.firebaseapp.com",
    databaseURL: "https://space-x-aec4a.firebaseio.com",
    projectId: "space-x-aec4a",
    storageBucket: "space-x-aec4a.appspot.com",
    messagingSenderId: "1099463887380",
    appId: "1:1099463887380:web:39c1271eff18d89311f501"
};

firebase.initializeApp(config);

export default firebase;