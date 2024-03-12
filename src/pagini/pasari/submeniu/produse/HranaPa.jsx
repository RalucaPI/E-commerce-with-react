import React, {useEffect, useState} from 'react'
import { db,auth } from '../../../firebase/Firebase'
import { Produse } from '../../../produse/Produse';
import { collection, getDocs,setDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
export const HranaPa = (props) => {

    const [produse, setProduse]=useState([]);
 const getProduse = async () => {
   try {
    const querySnapshot = await getDocs(collection(db, "Pasari/Pasari/Hrana"));
    const listaProduse = querySnapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setProduse(listaProduse);
  } catch (err) {
    console.error(err);
  }
};
  useEffect(() => {
  getProduse()
},[])

  const navigate = useNavigate();
 const [produseTotale, setProduseFinale] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(db, `Comenzi/Cos/Cos ${user.uid}`))
          .then((snapshot) => {
            const qty = snapshot.docs.length;
            setProduseFinale(qty);
          })
          .catch((error) => {
            console.error('Eroare', error);
          });
      } else {
        
      alert('Pentru a adauga produse in cos trebuie sa aveti cont! ')
         navigate('/conectare');
      }
    });
  }, []);

  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const addToCart = async (produs) => {
    const uid = auth.currentUser?.uid;
    if (uid !== null) {
      const cartRef = doc(db, `Comenzi/Cos/Cos ${uid}`, produs.ID);
      const cartSnapshot = await getDoc(cartRef);

      if (cartSnapshot.exists()) {
        const cartProduct = cartSnapshot.data();
        const updatedQty = cartProduct.qty + 1;

        await updateDoc(cartRef, {
          qty: updatedQty,
          PretTotal: updatedQty * produs.Pret,
        });

        console.log('Marire');
      } else {
        const newProduct = {
          ...produs,
          qty: 1,
          PretTotal: produs.Pret,
        };

        try {
          await setDoc(doc(db, `Comenzi/Cos/Cos ${uid}`, produs.ID), newProduct);
          console.log('Produsul a fost adaugat cu succes!');
        } catch (error) {
          console.error('Eroare:', error);
        }
      }
    } else {
      navigate('/conectare');
    }
  }; 

    return (
        <>       
         <Link to='/păsări'>
      <button className='btn' >Inapoi</button>
    </Link> 
            <br></br>
            {produse.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center-pasari'  data-heading='Hrană'>Hrană</h1>
                    <div className='produse-box'>
                        <Produse produse={produse} addToCart={addToCart}/>
                    </div>
                </div>
            )}
            {produse.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )}
        </>
  )
}
