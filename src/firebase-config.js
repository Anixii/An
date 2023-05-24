import { getDatabase,set,ref, get, child } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1fPEOtlpZ7D5OxR-kbgiJAbTq5Fz-mQ",
  authDomain: "ocean-ab23d.firebaseapp.com",
  projectId: "ocean-ab23d",
  storageBucket: "ocean-ab23d.appspot.com",
  messagingSenderId: "658849362667",
  appId: "1:658849362667:web:c878e483d6ee875c13c4ae",
  measurementId: "G-H1T933VNVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 
