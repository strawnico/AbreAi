// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.apikeyAbreAi;

const firebaseConfig = {
  apiKey,
  authDomain: "sa-abreai.firebaseapp.com",
  projectId: "sa-abreai",
  storageBucket: "sa-abreai.appspot.com",
  messagingSenderId: "44149181576",
  appId: "1:44149181576:web:a4eb61fbeb469eee16633d",
  measurementId: "G-PPNHCYN3VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};