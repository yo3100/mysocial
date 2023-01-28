// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "mysocialpays-nextjs.firebaseapp.com",
    projectId: "mysocialpays-nextjs",
    storageBucket: "mysocialpays-nextjs.appspot.com",
    messagingSenderId: "858470204090",
    appId: "1:858470204090:web:2665cfdcd2eabd7bec3883"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
