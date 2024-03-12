import React, { useState, useEffect, useRef } from 'react';
import { ProduseCos } from './ProduseCos';
import { db, auth } from '../firebase/Firebase';
import { collection, getDocs,  updateDoc, deleteDoc, doc,  addDoc } from 'firebase/firestore';

import './Cos.css'
import { Link, useNavigate } from 'react-router-dom';
export const Cos = () => {
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

  const [produseCos, setProduseCos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(db, `Comenzi/Cos/Cos ${user.uid}`)).then((snapshot) => {
          const produsNou = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setProduseCos(produsNou);
        });
      } else {
        alert('Pentru a adauga produse in cos trebuie sa aveti cont! ')
        navigate('/conectare');
      }
    });
  }, []);

  const qty = produseCos.map((produsCos) => {
    return produsCos.qty;
  });
  const reducerCant = (accumulator, currentValue) => accumulator + currentValue;
  const CantTotala = qty.reduce(reducerCant, 0);
  const Pret = produseCos.map((produsCos) => {
    return produsCos.PretTotal;
  });
  const reducerPret = (accumulator, currentValue) => accumulator + currentValue;
  const pretFinal = Pret.reduce(reducerPret, 0).toFixed(2);

  const [produseFinale, setProduseFinale] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(db, `Cos ${user.uid}`)).then((snapshot) => {
          const qty = snapshot.docs.length;
          setProduseFinale(qty);
        });
      }
    });
  }, []);

  const produsCosInc = (produsCos) => {
    const updatedProduseCos = produseCos.map((produs) => {
      if (produs.ID === produsCos.ID) {
        const updatedProdus = { ...produs };
        updatedProdus.qty += 1;
        updatedProdus.PretTotal = updatedProdus.qty * updatedProdus.Pret;
        return updatedProdus;
      }
      return produs;
    });

    setProduseCos(updatedProduseCos);

    auth.onAuthStateChanged((user) => {
      if (user) {
        updateDoc(doc(db, `Comenzi/Cos/Cos ${user.uid}`, produsCos.ID), {
          qty: produsCos.qty + 1,
          PretTotal: (produsCos.qty + 1) * produsCos.Pret,
        })
          .then(() => {
            console.log('Marire');
          })
          .catch((error) => {
            console.error('Error updating product:', error);
          });
      } else {
        console.log('Nu sunteti conectat');
      }
    });
  };

  const produsCosDec = (produsCos) => {
    if (produsCos.qty > 1) {
      const updatedProduseCos = produseCos.map((produs) => {
        if (produs.ID === produsCos.ID) {
          const updatedProdus = { ...produs };
          updatedProdus.qty -= 1;
          updatedProdus.PretTotal = updatedProdus.qty * updatedProdus.Pret;
          return updatedProdus;
        }
        return produs;
      });

      setProduseCos(updatedProduseCos);

      auth.onAuthStateChanged((user) => {
        if (user) {
          updateDoc(doc(db, `Comenzi/Cos/Cos ${user.uid}`, produsCos.ID), {
            qty: produsCos.qty - 1,
            PretTotal: (produsCos.qty - 1) * produsCos.Pret,
          })
            .then(() => {
              console.log('Micsorare');
            })
            .catch((error) => {
              console.error('Eroare:', error);
            });
        } else {
          console.log('Nu sunteti conectat');
        }
      });
    } else {
      sterge(produsCos);
    }
  };


  
  ///////////////////////RAMBURS///////////////////////////////////////////////////////////
  const [newNumeClient, setNewNumeClient] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelefon, setNewTelefon] = useState('');
  const [newAdresa, setNewAdresa] = useState("");
  const [newLocalitate, setNewLocalitate] = useState("");
  const [newJudet, setNewJudet] = useState("");
  const stergeProduseCos = async () => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }
  try {
    const docRefs = await getDocs(collection(db, `Comenzi/Cos/Cos ${user.uid}`));
    const deletePromises = docRefs.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  } catch (error) {
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
  try {
      await addDoc(collection(db, `/ComandaRamburs/DateLivrare/Cont ${user.uid}`), {
        newNumeClient,
        newTelefon,
        newAdresa,
        newEmail,
        newLocalitate,
        newJudet,
        pretFinal,
        CantTotala,
        produseCos,
      });
    setNewNumeClient('');
    setNewTelefon('');
    setNewAdresa('');
    setNewEmail('');
    setNewLocalitate('');
    setNewJudet('');
    alert('Comanda a fost finalizata cu succes!');
    stergeProduseCos();
    navigate('/comandă-efectuată')
  } catch (error) {
    console.error('Eroare:', error);
  }
  };
  /////////////////////////////////////////////////////////////////////////////////////////butoane
  const [showCardPayment, setShowCardPayment] = useState(false);
const [showCashPayment, setShowCashPayment] = useState(false);

const toggleCardPayment = () => {
  setShowCardPayment((prevValue) => !prevValue);
};

const toggleCashPayment = () => {
  setShowCashPayment((prevValue) => !prevValue);
};
   /////////////////////////////////////////////////////CARD///////////////////////////////////////////////////
const [numarCard, setNumarCard] = useState('');
const [dataExpirare, setataExpirare] = useState('');
const [codCard, setCodCard] = useState('');
const [numeTitular, setnumeTitular] = useState("");
const [email, setEmail] = useState("");
const [telefon, setTelefon] = useState('');
const [adresa, setAdresa] = useState("");
const [localitate, setLocalitate] = useState("");
const [judet, setJudet] = useState("");
const [cardExpired, setCardExpired] = useState(false);

const [cardDetails, setCardDetails] = useState({
    numarCard: '',
    dataExpirare: '',
    codSecuritate: '',
    numeTitular: '',
    telefon: '',
    email: '',
    adresa: '',
    localitate: '',
    judet: '',
    pretFinal: '',
    CantTotala:'',
  });

const stergeProduseCard = async (user) => {
    if (!user) {
    return;
  }
  try {
    const docRefs = await getDocs(collection(db, `Comenzi/Cos/Cos ${user.uid}`));
    const deletePromises = docRefs.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  } catch (error) {
  }
};

const finalizarePlataCard = async (e) => {
  e.preventDefault();
  const user = auth.currentUser;
  
  // Validați data expirării cardului
  const [luna, an] = cardDetails.dataExpirare.split('/');
  const dataExpirareCard = new Date(`20${an}`, luna - 1);

  if (dataExpirareCard < new Date()) {
    alert('Data expirării cardului este în trecut. Vă rugăm introduceți o dată validă.');
    return;
  }
    if (
      cardDetails.numarCard.replace(/\s/g, '').replace(/ /g, '').length !== 16 ||
      !/^\d+$/.test(cardDetails.numarCard.replace(/\s/g, '').replace(/ /g, '')) ||
      cardDetails.dataExpirare.length !== 5 ||
      !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.dataExpirare) ||
      cardDetails.codSecuritate.length !== 3 ||
      !/^\d+$/.test(cardDetails.codSecuritate)
    ) {
      alert('Introduceți detaliile cardului corecte!');
      return;
  }
   const currentYear = new Date().getFullYear().toString().substr(-2);
    const currentMonth = new Date().getMonth() + 1;
    const [expMonth, expYear] = cardDetails.dataExpirare.split('/').map(Number);

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      setCardExpired(true);
      return;
    }

    try {
       await addDoc(collection(db, `PlataCard/DetaliiPlata/Cont ${user.uid}`),{
        numarCard: cardDetails.numarCard,
        dataExpirare: cardDetails.dataExpirare,
        codSecuritate: cardDetails.codSecuritate,
        numeTitular,
        telefon,
        email,
        adresa,
        localitate,
        judet,
        pretFinal,
        CantTotala,
        produseCos,
         });
      setnumeTitular('');
      setTelefon('');
      setEmail('');
      setAdresa('');
      setLocalitate('');
      setJudet('');
      stergeProduseCard(user);
      setCardExpired(false);
      toggleCardPayment();
      alert('Plata cu cardul a fost finalizată cu succes!');
      navigate('/plată-finalizată-cu-succes')
    } catch (error) {
      console.error('Eroare la efectuarea plății cu cardul:', error);
    }
  };
  const handleCardDetailsChange = (e) => {
  const { name, value } = e.target;

  if (name === 'numarCard') {
    const newValue = value.replace(/\s/g, '');
    const formattedValue = newValue.replace(/[^0-9]/g, '');

    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: formattedValue,
    }));
  } else if (name === 'dataExpirare') {
    const newValue = value.replace(/[^0-9/]/g, '');

    if (newValue.length <= 5) {
      let formattedValue = newValue;

      if (newValue.length === 3 && !newValue.endsWith('/')) {
        formattedValue = `${newValue.substr(0, 2)}/${newValue.substr(2)}`;
      }

      setCardDetails((prevDetails) => ({
        ...prevDetails,
        [name]: formattedValue,
      }));
    }
  } else if (name === 'codSecuritate') {
    const newValueCVV = value.replace(/[^0-9/]/g, '');

    if (newValueCVV.length <= 3) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        [name]: newValueCVV,
      }));
    }
  } else {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }
};

  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 return (
  <>
    {produseCos.length > 0 && (
      <div className="produse-cos">
        <h1 className="text-center"></h1>
        <div className="produce-cos-box">
          <div className="produse-box">
            <ProduseCos
              produseCos={produseCos}
              produsCosInc={produsCosInc}
              produsCosDec={produsCosDec}
              setProduseCos={setProduseCos}
            />
          </div>
          <div className="summary-box">
            <h5>Datele finale</h5>
            <br></br>
            <div>
              Numar de produse: <span>{CantTotala}</span>
            </div>
            <div>
              Pret final: <span>{pretFinal} Roni</span>
            </div>

            <div className="payment-buttons">
              <button className="btn btn-primary" onClick={toggleCardPayment}  style={{ width:"230px"}}>
                {showCardPayment ? 'Ascunde detaliile cardului' : 'Plata cu cardul'}
              </button>
              {showCardPayment && (
                <form onSubmit={finalizarePlataCard}>
                  <div className="card-details">
                    <h5>Detalii card</h5>
                    <input
                      type="text"
                      name="numarCard"
                      value={cardDetails.numarCard}
                      onChange={handleCardDetailsChange}
                      placeholder="Numar card"
                      maxLength={16}
                      pattern="[0-9]*"
                      required
                    /><input
                      type="text"
                      name="dataExpirare"
                      value={cardDetails.dataExpirare}
                      onChange={handleCardDetailsChange}
                      placeholder="Data expirare (LL/AA)"
                      maxLength={5}
                      pattern="\d{2}/\d{2}"
                      required
                    />
                    <input
                      type="text"
                      name="codSecuritate"
                      value={cardDetails.codSecuritate}
                      onChange={handleCardDetailsChange}
                      placeholder="Cod securitate"
                      maxLength={3}
                      required
                    />
                    <input
                      type="text"
                      name="numeTitular"
                      value={numeTitular}
                      onChange={(e) => setnumeTitular(e.target.value)}
                      placeholder="Nume titular card"
                      required
                    />
                    <input
                      type="text"
                      name="telefon"
                      value={telefon}
                      onChange={(e) => setTelefon(e.target.value)}
                      placeholder="Telefon"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      name="adresa"
                      value={adresa}
                      onChange={(e) => setAdresa(e.target.value)}
                      placeholder="Adresă de facturare"
                      required
                    />
                    <input
                      type="text"
                      name="localitate"
                      value={localitate}
                      onChange={(e) => setLocalitate(e.target.value)}
                      placeholder="Localitate"
                      required
                    />
                    <input
                      type="text"
                      name="judet"
                      value={judet}
                      onChange={(e) => setJudet(e.target.value)}
                      placeholder="Județ"
                      required
                    />
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Finalizare plată
                  </button>

               </form>
              )} {cardExpired && <p style={{ color: 'red' }}>Data cardului este expirată!</p>}
              <br></br>
              <button className="btn btn-primary" onClick={toggleCashPayment} style={{ width:"230px"}}>
                {showCashPayment ? 'Ascunde detaliile pentru plata ramburs' : 'Plata ramburs'}
              </button>
              {showCashPayment && (
                <form onSubmit={handleSubmit}>
                <div className="card-details">
                     <h5>Plată ramburs </h5>
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
        </div>
      </div>
    )}
    {produseCos.length < 1 && (
      <div className="container-fluid text-cos">Nu aveți produse in coș!</div>
    )}
  </>
);
};