// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXB-hIecp9zoRnvpbQjk0mWBp27bLH-xg",
  authDomain: "ah1kth.firebaseapp.com",
  projectId: "ah1kth",
  storageBucket: "ah1kth.firebasestorage.app",
  messagingSenderId: "945403258240",
  appId: "1:945403258240:web:442d5a75af59f054d60d65",
  measurementId: "G-TV23WL6V91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
