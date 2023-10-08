// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKkz_NVxKStRjsvY2cFW95itcArS7rMI",
  authDomain: "fuego-da8bd.firebaseapp.com",
  projectId: "fuego-da8bd",
  storageBucket: "fuego-da8bd.appspot.com",
  messagingSenderId: "280493896656",
  appId: "1:280493896656:web:14d75739742d332aa47fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);