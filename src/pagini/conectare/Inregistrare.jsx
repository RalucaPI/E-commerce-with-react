import React,{useState } from 'react'
import {  createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {  ref, set } from "firebase/database";
import { auth, db } from '../firebase/Firebase'
import { addDoc } from 'firebase/firestore';
import {Link, useNavigate} from 'react-router-dom'
import './Inreg.scss'
export const Inregistrare = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nume, setName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [adresa, setAdresa] = useState("");
  const [localitate, setLocalitate] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('Email-ul de verificare a fost trimis!')
            console.log("usercredential " + userCredential.user);
            console.log("email verification: " + userCredential.user.emailVerified);
            navigate("/acasă");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
          });
        const user = userCredential.user;
        console.log("user id:" + user.uid);
        set(ref(db, `conturi/ ${user.uid}`), {
          name: nume,
          email: email,
          password: password,
            phone: telNumber,
            adresa: adresa,
            localitate:localitate,
        });
        setEmail(''),
        setPassword(''),
        setTelNumber(''),
        setAdresa(''),
        setLocalitate('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        id="userEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        id="nume"
        value={nume}
        onChange={(e) => setName(e.target.value)}
        placeholder="Numele complet"
      />
      <input
        type="tel"
        id="telNumber"
        value={telNumber}
        onChange={(e) => setTelNumber(e.target.value)}
        placeholder="Numar de telefon"
      />
      <input
        type="text"
        id="adresa"
        value={adresa}
        onChange={(e) => setAdresa(e.target.value)}
        placeholder="Adresa"
      />
      <input
        type="text"
        id="localitate"
        value={localitate}
        onChange={(e) => setLocalitate(e.target.value)}
        placeholder="Localitate si judet"
      />
      <button type='submit' className='btn btn-success btn-md' >Inregistrare</button>
      <div>Aveti deja cont? Conectati-va<Link to="/conectare" className='link'> aici</Link></div>

    </form>
  );
};