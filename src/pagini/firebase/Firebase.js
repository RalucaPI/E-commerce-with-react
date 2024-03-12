import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNug_8vA1PR0mgolIPkxHgk6YGxJsdO-g",
  authDomain: "magazin-c263a.firebaseapp.com",
  projectId: "magazin-c263a",
  storageBucket: "magazin-c263a.appspot.com",
  messagingSenderId: "437946554471",
  appId: "1:437946554471:web:f242906b273366f6971cc2",
  measurementId: "G-T5TDKV1JFP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const database = getDatabase(app);