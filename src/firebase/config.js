
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALMnqbjttPDlyr1Pd4ZbwXxrzd3eh2Z0U",
    authDomain: "quizz-app-79583.firebaseapp.com",
    projectId: "quizz-app-79583",
    storageBucket: "quizz-app-79583.appspot.com",
    messagingSenderId: "682570150281",
    appId: "1:682570150281:web:a8097f64c09b9f38ec3158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get the Firestore instance

// Get a reference to your collection
const themesRef = collection(db, 'Theme');

export default themesRef;