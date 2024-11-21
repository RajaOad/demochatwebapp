import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhyWPWRRq33Q40PAANURlES1C9rEyh2oE",
  authDomain: "blog-81961.firebaseapp.com",
  projectId: "blog-81961",
  storageBucket: "blog-81961.appspot.com",
  messagingSenderId: "93157923670",
  appId: "1:93157923670:web:d32ba88fa4fa55ae4a54f7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()