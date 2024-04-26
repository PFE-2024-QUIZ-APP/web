// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const db = getFirestore(app);

export const getThemes = async () => {

    let themes: object[] = [];
    try {
        const q = query(collection(db, "Theme"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            themes.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.log(error);
    }
    return themes;
};