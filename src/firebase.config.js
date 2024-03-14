// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFkiASit6alj1JIODzcyikLiuwOJ4Zc0w",
  authDomain: "crud-59be0.firebaseapp.com",
  projectId: "crud-59be0",
  storageBucket: "crud-59be0.appspot.com",
  messagingSenderId: "530946334172",
  appId: "1:530946334172:web:312032fdcce5747f1b0319",
  measurementId: "G-4BX58SBLXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
