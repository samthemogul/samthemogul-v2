// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSrGIw8gCg5hGDxiFcwMGoFS5sucmKNA",
  authDomain: "samthemogul-portfolio.firebaseapp.com",
  projectId: "samthemogul-portfolio",
  storageBucket: "samthemogul-portfolio.appspot.com",
  messagingSenderId: "925719750050",
  appId: "1:925719750050:web:593c9184a00f2da078befb",
  measurementId: "G-MR2L6R94ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);