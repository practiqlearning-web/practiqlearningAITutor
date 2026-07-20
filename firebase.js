// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjAS4rs4MPQqVrD1DBdGSB-tN8aXdQa60",
  authDomain: "practiq-ai-professor.firebaseapp.com",
  projectId: "practiq-ai-professor",
  storageBucket: "practiq-ai-professor.firebasestorage.app",
  messagingSenderId: "106174304331",
  appId: "1:106174304331:web:07725c8d8f69de72f9bdce",
  measurementId: "G-3NNN97T3VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
