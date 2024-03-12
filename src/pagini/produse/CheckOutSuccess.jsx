import React from 'react'
import card from './img/card.png'
import './Animatii.css'
import 'animate.css/animate.min.css';
import succes from './img/succes.gif'
export const CheckOutSuccess = () => {
  //animate__backInUp
 return (
   <>
     <div className='checkout'>
       <div className='text-succes'>
      <h2 className="title animate__animated animate__heartBeat" >
        <span className="title-word title-word-1">Comanda</span>
        <span className="title-word title-word-2">a</span>
        <span className="title-word title-word-3">fost</span>
        <span className="title-word title-word-4">plătită</span>
        <span className="title-word title-word-5">cu</span>
        <span className="title-word title-word-6">succes!</span>
      </h2></div>
       <div className='animatie-card'>
         <div className=' card-card'>
      <img src={card} className='animate__animated animate__bounceIn' alt="Card"/></div>
       </div>
       <img src={succes} className='animate__animated animate__zoomIn succes' alt='succes'/>
       <img src='https://img1.picmix.com/output/stamp/normal/8/0/8/2/2462808_f5a1a.gif' alt="confeti" className='confeti animate__animated animate__fadeIn'/>
     </div>
     
  </>
);

}
