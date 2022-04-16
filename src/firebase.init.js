// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3QcD5p_DKj1Qbs5G_zZyjUXWdIjNHrs",
  authDomain: "travel-blog-808ca.firebaseapp.com",
  projectId: "travel-blog-808ca",
  storageBucket: "travel-blog-808ca.appspot.com",
  messagingSenderId: "867619066041",
  appId: "1:867619066041:web:6c8ad15090b4618f308b68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
