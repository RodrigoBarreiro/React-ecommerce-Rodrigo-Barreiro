
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbONuUkXXkQozTjS8iNRBEaVqkRL5VzT0",
    authDomain: "react-rodrigobarreiro.firebaseapp.com",
    projectId: "react-rodrigobarreiro",
    storageBucket: "react-rodrigobarreiro.appspot.com",
    messagingSenderId: "94073118855",
    appId: "1:94073118855:web:5b471ee4ac369106e21822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)