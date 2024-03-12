import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNug_8vA1PR0mgolIPkxHgk6YGxJsdO-g",
  authDomain: "magazin-c263a.firebaseapp.com",
  projectId: "magazin-c263a",
  storageBucket: "magazin-c263a.appspot.com",
  messagingSenderId: "437946554471",
  appId: "1:437946554471:web:f242906b273366f6971cc2",
  measurementId: "G-T5TDKV1JFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);



const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email-ul cu resetarea parolei a fost trimis cu succes!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Email neidentificat");
      });
  };

  return (
    <form onSubmit={handleResetPassword}>
      <input
        type="email"
        id="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Resetare parolă</button>
    </form>
  );
};

export const Schimbare= () => {
  return (
    <div>
      <h1>Schimbă parola</h1>
      <ForgotPassword />
    </div>
  );
};

