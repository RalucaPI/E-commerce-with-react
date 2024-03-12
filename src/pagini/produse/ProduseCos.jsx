import React from 'react'
import { ProdusCosIndividual } from './ProdusCosIndividual'
export const ProduseCos = ({produseCos, produsCosInc, produsCosDec, setProduseCos}) => {
 return produseCos.map((produsCos)=>(
     <ProdusCosIndividual key={produsCos.ID} produsCos={produsCos}
         produsCosInc={produsCosInc}
         produsCosDec={produsCosDec}
         setProduseCos={setProduseCos}
     />
    ))
}
