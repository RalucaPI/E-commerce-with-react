import React from 'react'
import './StartPasari.css'
import { ContainerPasari } from '../container/ContainerPasari'
import parrot from './imagini/parrot.jpg'
import birdbird from './imagini/birdbirb.gif'
import ducktrack from './imagini/ducktrack.png'
import walkBird from './imagini/walkBird.png'

export const StartPasari = () => {
    return (
        <>
            <div className='tot-container-pasari'>
                <img src={parrot} className='imag-pasare' alt='pasare'/>
            <div className='container-pasari'>
                <ContainerPasari/>
                </div>
                <div className='duck-walking'>
                    <img src={birdbird} alt="bird" />
                </div>
                <div className='duck-track'>
                    <img src={ducktrack} alt="bird" />
                </div>
                <div className='bird-track'>
                    <img src={ducktrack}  alt='duckt'/>
                </div>
                <div className='bird-track-two'>
                    <img src={ducktrack}  alt='duck'/>
                </div>
            </div>
        </>
  )
}
