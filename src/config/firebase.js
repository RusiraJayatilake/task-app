// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFonqEyxVvYzJyF9HA1PTZTTfaPeemo14",
  authDomain: "pwataskappdb.firebaseapp.com",
  projectId: "pwataskappdb",
  storageBucket: "pwataskappdb.appspot.com",
  messagingSenderId: "884243720868",
  appId: "1:884243720868:web:d72d1c2694f0e374079431"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;