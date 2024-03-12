import React from 'react'
import {Footer } from './pagini/noutati/Footer'
import { Carusel } from './componente/carusel/Carusel'
import { StartPisici } from './start/StartPisici';
import { StartCaine } from './start/StartCaine';
import { StartPasari } from './start/StartPasari';
import { StartPesti } from './start/StartPesti';
import { StartReptile } from './start/StartReptile';
import { StartRozatoare } from './start/StartRozatoare';
import './App.css'
export function HomePage() {

    return (
        <>
            <div className='homepage'>
                <Carusel />
                <StartPisici />
                <StartCaine />
                <StartPasari/>
                <StartPesti/>
                <StartReptile/>
                <StartRozatoare />
                <Footer/>
            </div>
     </>
  )
}
