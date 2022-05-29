// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANUsvhTNuuiKiRdgfmz84nAewrYmrxTnE",
  authDomain: "elegent-autoparts.firebaseapp.com",
  projectId: "elegent-autoparts",
  storageBucket: "elegent-autoparts.appspot.com",
  messagingSenderId: "85947844233",
  appId: "1:85947844233:web:77f5694f6d864ad0af6858",
  measurementId: "G-N0EGMHXECG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;