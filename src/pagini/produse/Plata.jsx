
import React, { useState, useEffect } from 'react';
import { ProduseCos } from './ProduseCos';
import { db, auth } from '../firebase/Firebase';
import { collection, getDocs, serverTimestamp, updateDoc, deleteDoc,doc, setDoc, addDoc, FieldValue  } from 'firebase/firestore';
import { Cos } from './Cos';
export const Plata = ({pretFinal, CantTotala}) => {
 
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [ramburs, setRamburs] = useState([]);
  const [newNumeClient, setNewNumeClient] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelefon, setNewTelefon] = useState('');
  const [newAdresa, setNewAdresa] = useState("");
  const [newLocalitate, setNewLocalitate] = useState("");
  const [newJudet, setNewJudet] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      navigate('/conectare');
      return;
    }
  try {
      // Adăugăm datele de livrare în colecția "ComandaRamburs"
      await addDoc(collection(db, `/ComandaRamburs/DateLivrare/Cont ${user.uid}`), {
        newNumeClient,
        newTelefon,
        newAdresa,
        newEmail,
        newLocalitate,
        newJudet,
      });
    setNewNumeClient('');
    setNewTelefon('');
    setNewAdresa('');
    setNewEmail('');
    setNewLocalitate('');
    setNewJudet('');

  
     console.log('Plata în numerar a fost finalizată cu succes!');
    } catch (error) {
      console.error('Eroare:', error);
    }
  };
  const [showCardPayment, setShowCardPayment] = useState(false);
const [showCashPayment, setShowCashPayment] = useState(false);

const toggleCardPayment = () => {
  setShowCardPayment((prevValue) => !prevValue);
};

const toggleCashPayment = () => {
  setShowCashPayment((prevValue) => !prevValue);
};

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  return (
    <>
          <div className="summary-box">
            <h5>Finalizare comanda</h5>
            <br></br>
            <br></br>
            <div className="payment-buttons">
              <button className="btn btn-primary" onClick={toggleCardPayment}>
                {showCardPayment ? 'Ascunde detaliile cardului' : 'Plata cu cardul'}
              </button>
              {showCardPayment && (
               <form></form>
              )}
              <br></br>
              <button className="btn btn-primary" onClick={toggleCashPayment}>
                {showCashPayment ? 'Ascunde detaliile pentru plata ramburs' : 'Plata ramburs'}
              </button>
              {showCashPayment && (
                <form onSubmit={handleSubmit}>
                <div className="card-details">
                     <h5>Detalii pentru plata ramburs</h5>
                  <input
                    type="text"
                    name="numeClient"
                    value={newNumeClient}
                    onChange={(e) => setNewNumeClient(e.target.value )}
                    placeholder="Nume client"
                    required
                      />
                       <input
                    type="text"
                    name="telefon"
                  value={newTelefon}
                    onChange={(e) => setNewTelefon(e.target.value )}
                    placeholder="Telefon"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value )}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="adresa"
                     value={newAdresa}
                    onChange={(e) => setNewAdresa(e.target.value )}
                    placeholder="Adresa de livrare"
                    required
                  />
                  <input
                    type="text"
                    name="localitate"
                     value={newLocalitate}
                    onChange={(e) => setNewLocalitate(e.target.value )}
                    placeholder="Localitate"
                    required
                  />
                  <input
                    type="text"
                    name="judet"
                     value={newJudet}
                    onChange={(e) => setNewJudet(e.target.value )}
                    placeholder="Județ"
                    required
                  />
                  </div>
                  <br></br>
                  <button className="btn btn-primary" >
                    Plaseaza comanda
                  </button>
                </form>
              )}
            </div>
      </div>
      </>
  )
}
