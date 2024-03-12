import React, {useEffect, useState} from 'react'
import { Comanda } from './Comanda';
import { Card } from './Card';
import { db,auth } from '../firebase/Firebase';
import { collection, getDocs} from 'firebase/firestore'
import './Comanda.css'
export const AfisareComanda = (props) => {
    const [comanda, setComanda] = useState([])
    const [comandaCard, setComandaCard] =useState([])
  //`PlataCard/DetaliiPlata/Cont ${user.uid}`
    useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(db, `/ComandaRamburs/DateLivrare/Cont ${user.uid}`)).then((snapshot) => {
          const comandaNoua = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setComanda(comandaNoua);
        });
      } else {
        console.log('User is not signed in to retrieve cart');
      }
    });
    }, []);
    useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(db, `/PlataCard/DetaliiPlata/Cont ${user.uid}`)).then((snapshot) => {
          const comandaNouaCard = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setComandaCard(comandaNouaCard);
        });
      } else {
        console.log('User is not signed in to retrieve cart');
      }
    });
  }, []);
    return (
      <>   
        <div className='afisare-com'>
            <br></br>
            {comanda.length > 0 && (
                <div className='container-fluid '>
                    <div className='comanda-box'>
                        <Comanda comanda={comanda}/>
                    </div>
                </div>
            )}
            {comanda.length < 1 && (
                <div className='container-fluid'>Datele comenzii se încarcă....</div>
        )}
        <Card/></div>
        </>
  )
}
