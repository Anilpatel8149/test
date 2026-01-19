// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3mp0--pgElnutcJuOEzGLwTE_TwCk0w",
  authDomain: "chaudhary-3aeb8.firebaseapp.com",
  projectId: "chaudhary-3aeb8",
  storageBucket: "chaudhary-3aeb8.firebasestorage.app",
  messagingSenderId: "885165338248",
  appId: "1:885165338248:web:a845879c0fe3f57d6ff93d",
  measurementId: "G-ZNW376H4W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);