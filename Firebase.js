// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACuRTu3_iVxYeHEN1ImLTouKPYf9c7YRM",
  authDomain: "zapshift-df190.firebaseapp.com",
  projectId: "zapshift-df190",
  storageBucket: "zapshift-df190.firebasestorage.app",
  messagingSenderId: "547335709981",
  appId: "1:547335709981:web:4ef8410febfbb97f092df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);