import React from 'react'
import './StartReptile.css'
import { ContainerReptile } from '../container/ContainerReptile'
import claws from './imagini/claws.png'

export const StartReptile = () => {
    return (
      <>
            <div className='imagine-container-reptile'>
                <div className='imagine-reptile'>
                    <img src='https://wallpapercave.com/wp/qNqmdfC.jpg' alt='soparla' className='img-soparla'/>
                 <div className='img-overlay'></div>
                </div>
                <div className='text-reptile'>Reptile</div>
                <div className='container-reptile'>
                    <ContainerReptile/>
                </div>
                <div className='claws'>
                    <img src={claws} alt='claw'/>
                </div>
                <div className='reptile-claws'>
                    <img src={claws} alt='claws'/>
                </div>
            </div>
      </>
  )
}
