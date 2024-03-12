import React from 'react'

export const ComandaInd = ({ comandaIndividuala, produseCos }) => {
  return (
    <>
      <div className='ramburs'>
        <div className='comanda-ramb title'> <h2 className='tip'>Comanda ramburs</h2>
            <div className='nume '>Nume: {comandaIndividuala.newNumeClient}</div>
            <div className='pret '> Total de plata: {comandaIndividuala.pretFinal} Roni</div>
            <div className='cantitate '>Cantitatea de produse: {comandaIndividuala.CantTotala} </div>
            <div className='email '>Email: {comandaIndividuala.newEmail} </div>
            <div className='telefon '> Numar de telefon: {comandaIndividuala.newTelefon} </div>
            <div className='adresa '>Adresa: {comandaIndividuala.newAdresa} </div>
            <div className='localitate '>Localitatea: {comandaIndividuala.newLocalitate} </div>
            <div className='judet '>Judetul: {comandaIndividuala.newJudet} </div>
    </div> 
    </div >
    </>
    )
}
