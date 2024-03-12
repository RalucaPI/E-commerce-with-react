import React from 'react'
import { ComandaInd } from './ComandaInd'
export const Comanda = ({comanda}) => {
  return comanda.map((comandaIndividuala)=>(
      <div>
          <ComandaInd
            key={comandaIndividuala.ID}
            comandaIndividuala={comandaIndividuala}
          />
    </div>
  ))
}
