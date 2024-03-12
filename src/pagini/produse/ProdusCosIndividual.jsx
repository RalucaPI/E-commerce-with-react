import React from 'react'
import { Plus, Minus } from 'phosphor-react'; 
import {db, auth} from '../firebase/Firebase'
import { doc, deleteDoc } from 'firebase/firestore';
import './Cos.css'
export const ProdusCosIndividual = ({produsCos, produsCosInc, produsCosDec, setProduseCos}) => {
 const marire=()=>{
        produsCosInc(produsCos);
    }

    const scadere=()=>{
        produsCosDec(produsCos);
    }
  const sterge = async () => {
    try {
      await deleteDoc(doc(db, `Comenzi/Cos/Cos ${auth.currentUser.uid}`, produsCos.ID));
      console.log('Sterge');
      setProduseCos(prevProduseCos => prevProduseCos.filter(item => item.ID !== produsCos.ID));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

 
  return (
    <div className='product'>
            <div className='product-img'>
                <img src={produsCos.Imagine} alt="product-img"/>
            </div>
            <div className='product-text title'>{produsCos.Nume}</div>
            <div className='product-text description'>{produsCos.Marime}</div>
            <div className='product-text price'> {produsCos.Pret} Roni</div>
            <span>Cantitate</span>
            <div className='product-text quantity-box'>
        <div className="action-btns">
          <div className='action-btns minus'  onClick={scadere}>
                  <Minus size={20} />
                </div>                
                <div>{produsCos.qty}</div>               
                <div className='action-btns plus' onClick={marire} >
                    <Plus size={20}/>
          </div>
          </div>

            </div>
            <div className='product-text cart-price'> {produsCos.PretTotal} Roni</div>
            <div className='btn btn-primary ' onClick={sterge}><div className='sterge'>Sterge</div></div>            
        </div>
  )
}
