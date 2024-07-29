// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxraWqLLNV9M-aL081Sl0pPbOc-oUoN-g",
  authDomain: "level-oxygen-427510-e2.firebaseapp.com",
  projectId: "level-oxygen-427510-e2",
  storageBucket: "level-oxygen-427510-e2.appspot.com",
  messagingSenderId: "39191391644",
  appId: "1:39191391644:web:f2f1a8e3c5e95d2fa7ec59",
  measurementId: "G-V5Q0FZ0Z9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
