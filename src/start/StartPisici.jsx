import React from 'react'
import { ContainerPisica } from '../container/ContainerPisica'
import './StartPisici.css'
import pawblack from './imagini/pawblack.png'
import pawwhite from './imagini/pawwhite.png'
import pawcolor from './imagini/pawcolor.png'
import paw1 from './imagini/paw1.png'
import paw2 from './imagini/paw2.png'
import paw3 from './imagini/paw3.png'
import paw4 from './imagini/paw4.png'
import walkingGIF from './imagini/walkingGIF.gif'
export const StartPisici = () => {
    return (
        <>
            <div className='imagine-container'>
        <img
          src='https://www.dcnewsnow.com/wp-content/uploads/sites/14/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          className='imagine-pisica'
        />
        <div className='text-pisici'>
          <div className='text-1'>Pisici  Pisici Pisici</div>
          <div className='text-2'>Pisici  Pisici Pisici</div>
          <div className='text-3'>Pisici  Pisici Pisici</div>
          <div className='text-4'>Pisici  Pisici Pisici</div>
                </div>
                <div className='paw-pisica'>
          <img src={pawblack} className='paw-image paw-image-bottom-right' alt='Paw Black' />
          <img src={pawcolor} className='paw-image paw-image-top-right' alt='Paw Color' />
          <img src={pawwhite} className='paw-image paw-image-bottom-left' alt='Paw White' />
          <img src={pawwhite} className='paw-image paw-image4' alt='Paw White' />
          <img src={pawcolor} className='paw-image paw-image5' alt='Paw Color' />
          <img src={pawblack} className='paw-image paw-image6' alt='Paw Black' />
          <img src={paw1} className='paw-image paw-image7' />
          <img src={paw2} className='paw-image paw-image8' />
          <img src={paw3} className='paw-image paw-image9' />
          <img src={paw4} className='paw-image paw-image10' />
        </div>       
        <div className='container-pisica'>
          <ContainerPisica />
                </div>
                <div className='walking-cat'>
                    <img src={walkingGIF}
                      className='walk-1'
                    />
                </div>
      </div>
    </>
  )
}
