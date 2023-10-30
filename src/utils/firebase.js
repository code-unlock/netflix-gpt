// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeeRWaNpYeSeWY2irT-6SGvGhOZ_TNkAg",
  authDomain: "netflix-gpt-d9be3.firebaseapp.com",
  projectId: "netflix-gpt-d9be3",
  storageBucket: "netflix-gpt-d9be3.appspot.com",
  messagingSenderId: "888059861369",
  appId: "1:888059861369:web:369230bf564ee5a109f7a8",
  measurementId: "G-KJ765R7NQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();