// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJJPW9DB1zneK6MTD7M2f6Wim4Au6Vvk",
  authDomain: "simple-firebase-f6b0f.firebaseapp.com",
  projectId: "simple-firebase-f6b0f",
  storageBucket: "simple-firebase-f6b0f.appspot.com",
  messagingSenderId: "996390516135",
  appId: "1:996390516135:web:7dfdba7c10daf9363a7282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;