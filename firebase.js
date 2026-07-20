
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyCjAS4rs4MPQqVrD1DBdGSB-tN8aXdQa60",
  authDomain: "practiq-ai-professor.firebaseapp.com",
  projectId: "practiq-ai-professor",
  storageBucket: "practiq-ai-professor.firebasestorage.app",
  messagingSenderId: "106174304331",
  appId: "1:106174304331:web:07725c8d8f69de72f9bdce",
  measurementId: "G-3NNN97T3VC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
