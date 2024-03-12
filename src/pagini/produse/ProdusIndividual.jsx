import React from 'react'

export const ProdusIndividual = ({ produsIndividual, addToCart }) => {
     const handleAddToCart=()=>{
        addToCart(produsIndividual);
    }
    return (
        <div className='product'>
            <div className='product-img'>
            <img src={produsIndividual.Imagine} alt="product-img"/>
            </div>
            <div className='product-text title'>{produsIndividual.Nume}</div>
            <div className='product-text description'>{produsIndividual.Marime}</div>
            <div className='product-text price'> {produsIndividual.Pret} Roni</div>
             <div className='btn ' onClick={handleAddToCart} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Adauga in cos</div>
        </div> 
    )
}