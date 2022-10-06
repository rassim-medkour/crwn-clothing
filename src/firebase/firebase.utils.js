// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCBwsFo0891w04qIql8Y9uJ77W6gj_mLE",
    authDomain: "crwn-db-535ec.firebaseapp.com",
    projectId: "crwn-db-535ec",
    storageBucket: "crwn-db-535ec.appspot.com",
    messagingSenderId: "764344145721",
    appId: "1:764344145721:web:c1a9adb5b944b048b9fae8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);