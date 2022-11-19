// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzQtzVsSpJRWIEC93d6ydjk0VBcjL1P5Q",
  authDomain: "dev-hacks-app.firebaseapp.com",
  projectId: "dev-hacks-app",
  storageBucket: "dev-hacks-app.appspot.com",
  messagingSenderId: "20876722222",
  appId: "1:20876722222:web:acda0d7f18a1a8a439dfbf",
  measurementId: "G-66H1HE050S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export default app;