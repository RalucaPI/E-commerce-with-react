import React from 'react'

export const ComandaCardInd = ({ comandaIndCard}) => {
  return (
    <div className='cardul'>
      <div className='comanda-card'>
      <div className='titlu'><h3>
        Comandă plătită</h3>
      </div>
            <div className=' nume'>Nume: {comandaIndCard.numeTitular}</div>
            <div className=' pret'> Total de plata: {comandaIndCard.pretFinal} Roni</div>
            <div className=' cantitate'>Cantitatea de produse: {comandaIndCard.CantTotala} </div>
            <div className='email '>Email: {comandaIndCard.email} </div>
            <div className='telefon '> Numar de telefon: {comandaIndCard.telefon} </div>
            <div className='adresa '>Adresa: {comandaIndCard.adresa} </div>
            <div className='localitate '>Localitatea: {comandaIndCard.localitate} </div>
            <div className='judet '>Judetul: {comandaIndCard.judet} </div>
      </div>
    </div>
  )
}
