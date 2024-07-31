// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_EbhRIBePYuH2Tft0NqQ_OC8Pu0zt9A",
  authDomain: "virtualr-824d1.firebaseapp.com",
  projectId: "virtualr-824d1",
  storageBucket: "virtualr-824d1.appspot.com",
  messagingSenderId: "191727585049",
  appId: "1:191727585049:web:5fa719276e093c8313a788",
  measurementId: "G-XP2RS39VK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
