import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth, provider} from '../firebase/Firebase'
import './conectare.css'
import { signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
export const Conectare = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Conectare cu succes!");
        const user = userCredential.user;
        navigate("/acasă");if (location.pathname !== '/acasă') {
      window.location.href = '/acasă';
    }
        console.log("email verification: " + user.emailVerified);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
         alert("Email-ul sau parola a fost introdusa gresit!");
      });
  };

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/acasă");
    
    };
    return (
        <div className='conectare'>
           
            <h1>Conectare</h1>         
               <form onSubmit={handleSignIn}>
         <input
           type="email"
           id="Email"
           value={email}
            onChange={(e) => setEmail(e.target.value)}
           placeholder="Email"
        />
         <input
         type="password"
          id="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Parola"
          />
          <button className='buton-conectare' type="submit">Conectare</button>
         </form>

         <div className='text-conectare'>
         <span>Nu aveți cont?  Înregistrați-vă
          <Link to="/înregistrare" className='link'> aici</Link></span>
          <span> <Link to="/schimbă-parola" className='link'>Schimbă parola</Link></span>
         </div>
        </div>
    )
}