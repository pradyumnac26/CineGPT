// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "cinegpt-78254.firebaseapp.com",
  projectId: "cinegpt-78254",
  storageBucket: "cinegpt-78254.firebasestorage.app",
  messagingSenderId: "508623158528",
  appId: "1:508623158528:web:0205073b0d7524b15a87e5",
  measurementId: "G-2XDQMYS9GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();