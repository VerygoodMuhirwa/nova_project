// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBktHyvnGwPuFl5LbiirrB9eFe6gUIetAs",
  authDomain: "embeddedproject-403610.firebaseapp.com",
  projectId: "embeddedproject-403610",
  storageBucket: "embeddedproject-403610.appspot.com",
  messagingSenderId: "328787895350",
  appId: "1:328787895350:web:4d9ff94f83cbba3b616497",
  measurementId: "G-YDNCZTFWN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
