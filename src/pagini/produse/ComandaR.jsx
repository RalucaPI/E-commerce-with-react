import React from 'react'
import './Animatii.css'
export const ComandaR = () => {
  return (
    <>
      <div className='comanda-ram'>
        <div class="loop-wrapper">
          <div class="mountain"></div>
          <div class="hill"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="rock"></div>
          <div class="truck"></div>
          <div class="wheels"></div>
        </div> 
        <div className='text-comanda-ram'>
            <div class="letter-image">
              <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                  <div class="letter-border"></div>
                  <div class="letter-title"> Comanda a fost plasată cu succes!</div>
                  <div class="letter-context">Vă mulțumim!</div>
                  <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                  </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
              </div>
              <div class="shadow"></div>
          </div>
          </div>
      </div>
    </>
  )
}
