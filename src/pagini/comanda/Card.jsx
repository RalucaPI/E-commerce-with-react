import React, {useEffect, useState} from 'react'
import { ComandaCard } from './ComandaCard';
import { db,auth } from '../firebase/Firebase';
import { collection, getDocs} from 'firebase/firestore'
import './Comanda.css'

export const Card = () => {
    const [comandaCard, setComandaCard] =useState([])
  //`PlataCard/DetaliiPlata/Cont ${user.uid}`

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
            <br></br>
            {comandaCard.length > 0 && (
                <div className='container-fluid'>
                    <div className='comanda-box'>
                        <ComandaCard comandaCard={comandaCard}/>
                    </div>
                </div>
            )}
            {comandaCard.length < 1 && (
                <div className='container-fluid'></div>
            )}
        </>
  )
}
