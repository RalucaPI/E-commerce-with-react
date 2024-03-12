import React from 'react'
import { ContainerCaini } from '../container/ContainerCaini'
import './StartCaine.css'
import doggif from './imagini/doggif.gif'
export const StartCaine = () => {
  return (
      <>
        <div className='imagine-container-caine'>
        <img
          src='https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc'
          alt='caineC'
          className='imagine-caine'
        />
        <div className='caine-zzz'>        
        <img
          src='https://media1.giphy.com/media/EuxI296dwYZ3SIH8cG/giphy.gif?cid=6c09b952ozeu7levtizj5s8gbl38i1g8px1hllqccqsfiema&ep=v1_stickers_related&rid=giphy.gif&ct=s'
          alt='zzz'
            className='zzz'
        /></div>  
        <div className='caine-bubble'>        
        <img
          src='https://i.gifer.com/ZcsV.gif'
          alt='zzz-bubble'
            className='bubble-zzz'
        /></div> 
        <div className='container-caine'>
          <ContainerCaini />
              </div>
             
      </div>
    </>
  )
}
