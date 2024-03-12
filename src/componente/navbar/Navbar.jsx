import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { PawPrint, CaretDown, ShoppingCartSimple, Microphone, Car, ListPlus  } from 'phosphor-react';
import Dropdown from './Dropdown';
import { signOut } from "firebase/auth";
import { auth, db } from '../../pagini/firebase/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useAuthState } from "react-firebase-hooks/auth";
function Navbar({}) {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  const handleLogoClick = () => {
    closeMobileMenu();
    if (location.pathname !== '/acasă') {
      window.location.href = '/acasă';
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [produseFinale, setProduseFinale] = useState(0);

  useEffect(() => {
     if (user) {
      console.log("User is authenticated");
      const cartRef = collection(db, `Comenzi/Cos/Cos ${user.uid}`);
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartItems = snapshot.docs.map((doc) => doc.data());
        console.log("Cart Items:", cartItems);
        const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
        console.log("Total Quantity:", totalQty);
        setProduseFinale(totalQty);
      });

      return () => {
        unsubscribe();
      };
    } else {
      setProduseFinale(0);
    }
  }, [user]);

  console.log("produseFinale:", produseFinale);
  return (
    <>
      <nav className='navbar'>
        <div className='logopaw'>
        <Link to='/acasă' className='navbar-logo' onClick={handleLogoClick}>
          <div className='text'>PawZone </div>
        </Link>
        <Link to='/'>
          <div className="paw">
            <div className="paw1"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw2"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw4"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw3"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw4"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw5"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw6"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw7"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
            <div className="paw8"><PawPrint size={35} color="#ffffff" weight="fill" /></div>
          </div>
          </Link>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='animale'>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <button
                className='nav-links'
                onClick={closeMobileMenu}
                style={{border:"10px" }}
              ><div className='animale' >Animale  <CaretDown size={16} /></div>
              </button>
              {dropdown && <Dropdown />}
            </li>
          </div>
          <Link to='/cautare-vocala'  >
          <div className='text cautare-vocala'><Microphone size={32} /> </div>
        </Link>
          <li className='nav-item'>
            <Link
              to='/coș'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <ShoppingCartSimple size={32} />
              <span className={produseFinale > 0 ? 'cart-indicator show' : 'cart-indicator'}>
              {produseFinale > 0 && produseFinale}
            </span>
            </Link>
          </li>
        </ul>
        {user ? (
          <div className="user"></div>
        ) : (
          <Button />
        )}
        
        {user && (
          <div className="user">
            <button className='user-conectat' onClick={signUserOut} style={{ backgroundColor: "#110341", color: "white", height: "40px",border:"none",fontSize:"15px" }}>Deconectare</button>
           <Link to='/comandă'> <ListPlus size={25} color="#fff" /></Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;