// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuHPxNsZyl6Choui_UIHjOVARMH9sLl8U",
  authDomain: "blackmarket-auth.firebaseapp.com",
  projectId: "blackmarket-auth",
  storageBucket: "blackmarket-auth.firebasestorage.app",
  messagingSenderId: "47235324926",
  appId: "1:47235324926:web:50c9743275641158703eaf",
  measurementId: "G-FZ6JSG27JY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
