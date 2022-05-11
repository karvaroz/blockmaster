// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLLGl4jboyW6CM8zwyxoFcDJQyXky_4Gs",
  authDomain: "blockmaster-8966c.firebaseapp.com",
  projectId: "blockmaster-8966c",
  storageBucket: "blockmaster-8966c.appspot.com",
  messagingSenderId: "584753650808",
  appId: "1:584753650808:web:5113eaf8888c7bcebe218d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

const db = getFirestore();


export {
    app,
    google,
    facebook, db
}
