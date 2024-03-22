// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB06766-zBeH9geTQcnqTAfpGRTrvM6adk",
  authDomain: "portfolio-5aae0.firebaseapp.com",
  projectId: "portfolio-5aae0",
  storageBucket: "portfolio-5aae0.appspot.com",
  messagingSenderId: "947019711017",
  appId: "1:947019711017:web:624030e8063ca0b12a5238",
  measurementId: "G-WXP1GMXL7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
