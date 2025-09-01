// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bingegpt-c2b35.firebaseapp.com",
  projectId: "bingegpt-c2b35",
  storageBucket: "bingegpt-c2b35.firebasestorage.app",
  messagingSenderId: "229175771080",
  appId: "1:229175771080:web:8a468fc53ec90d89830afd",
  measurementId: "G-Z5YZBR970F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
