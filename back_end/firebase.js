// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyD_ark35n8AD3GUhvoORXT62Wp8BNG1qoc",
    authDomain: "blackmarket-2c3b4.firebaseapp.com",
    projectId: "blackmarket-2c3b4",
    storageBucket: "blackmarket-2c3b4.firebasestorage.app",
    messagingSenderId: "114831821794",
    appId: "1:114831821794:web:e33af53ce49c86586087bb",
    measurementId: "G-LYMG183JBS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = app.name && typeof window !== "undefined" ? getAnalytics(app): null;
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export {app, auth, analytics, db, provider};