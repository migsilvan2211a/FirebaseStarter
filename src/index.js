// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChzQhPODNgm-LaRV1ASnU92TOSydOryYU",
  authDomain: "migsilvan.firebaseapp.com",
  projectId: "migsilvan",
  storageBucket: "migsilvan.appspot.com",
  messagingSenderId: "1093448550926",
  appId: "1:1093448550926:web:57ba55a24b24682c83ca5f",
  measurementId: "G-S2TNRD5P1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)