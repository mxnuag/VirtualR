// src/components/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCX_EbhRIBePYuH2Tft0NqQ_OC8Pu0zt9A",
  authDomain: "virtualr-824d1.firebaseapp.com",
  projectId: "virtualr-824d1",
  storageBucket: "virtualr-824d1.appspot.com",
  messagingSenderId: "191727585049",
  appId: "1:191727585049:web:5fa719276e093c8313a788",
  measurementId: "G-XP2RS39VK8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
