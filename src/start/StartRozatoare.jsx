import React from 'react'
import { ContainerRozatoare } from '../container/ContainerRozatoare'
import './StartRozatoare.css'
export const StartRozatoare = () => {
    return (
        <>
    <div className='imagine-container-r'>
        <div className='imagine-rozatoare'>
            <img src='https://c4.wallpaperflare.com/wallpaper/901/520/4/animals-hamster-wallpaper-preview.jpg' alt='rozatoare' className='imagine-rozatoare'/>
        </div>
        <div className='text-rozatoare'> Rozatoare
                </div>
      <div className='container-rozatoare'>
          <ContainerRozatoare/>
      </div>
      <div className='animatie-rozatoare'>
        <img src='https://giffiles.alphacoders.com/427/4270.gif' alt='iepure' className='iepure-gif'/>
      </div>
    </div>
    </>
  )
}
