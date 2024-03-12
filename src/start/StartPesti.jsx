import React from 'react'
import './StartPesti.css'
import { ContainerPesti } from '../container/ContainerPesti'
export const StartPesti = () => {
    return (
      <>
            <div className='imagine-container-pesti'>
                <img src='https://images.wallpaperscraft.com/image/single/fish_blue_water_209008_3840x2400.jpg' className='imagine-pesti' alt='pesste'/>
                <div className='container-pesti'>
                    <ContainerPesti/>
                </div>  
                <div className='bubble'>
                    <img src='https://img1.picmix.com/output/stamp/normal/3/8/7/9/859783_9a17e.gif' alt='bubble' className='bubble-two'/>
                </div>
          
        </div>
    </>
  )
}
