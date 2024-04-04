// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "pwataskappdb.firebaseapp.com",
  projectId: "pwataskappdb",
  storageBucket: "pwataskappdb.appspot.com",
  messagingSenderId: "884243720868",
  appId: "1:884243720868:web:d72d1c2694f0e374079431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;