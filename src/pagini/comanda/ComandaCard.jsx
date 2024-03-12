import React from 'react'
import {ComandaCardInd} from './ComandaCardInd'
//comandaIndCard
export const ComandaCard = ({comandaCard}) => {
    return comandaCard.map((comandaIndCard)=>(
      <div>
          <ComandaCardInd
            key={comandaIndCard.ID}
            comandaIndCard={comandaIndCard}
          />
    </div>
  ))
}
