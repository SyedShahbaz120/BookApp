

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2NWOgNgpa0HEkx6cIIL4bTuhzNBEb5Mk",
  authDomain: "lab4-adv-topics.firebaseapp.com",
  projectId: "lab4-adv-topics",
  storageBucket: "lab4-adv-topics.appspot.com",
  messagingSenderId: "789101776014",
  appId: "1:789101776014:web:114badcc16335b71e5cddf",
  measurementId: "G-1C77LH36MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
