// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
useEffect(() => {
const firebaseConfig = {
  apiKey: "AIzaSyCAsJ4r-EPM3eTKduDOnGFJlj1vq6378EU",
  authDomain: "auth-demo-5219c.firebaseapp.com",
  projectId: "auth-demo-5219c",
  storageBucket: "auth-demo-5219c.firebasestorage.app",
  messagingSenderId: "275727416717",
  appId: "1:275727416717:web:4a5b61f47c60683bd991c4"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
}, [])
