// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5m2Hez6v4W5MBOg_S4LDDL7LeZbHsYU",
  authDomain: "chat-app-b5f0b.firebaseapp.com",
  projectId: "chat-app-b5f0b",
  storageBucket: "chat-app-b5f0b.firebasestorage.app",
  messagingSenderId: "821885854872",
  appId: "1:821885854872:web:21baee475627fa602c9ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();