import React from 'react'
import { HranaRe } from './submeniu/produse/HranaRe'
import { AccesoriiRe } from './submeniu/produse/AccesoriiRe'
import { AdapatoareHranitoareRe } from './submeniu/produse/AdapatoareHranitoareRe'
import { AsternutRe } from './submeniu/produse/AsternutRe'
import { SolutiiApaRe } from './submeniu/produse/SolutiiApaRe';
import { Terarii } from './submeniu/produse/Terarii';
import { Link } from 'react-router-dom';
import './style.css'
export const Reptile = () => {
  return (
    <>
      
      <div className='produse-reptile'>
      <div className='produse-item'>
      <Link to='/reptile/reptile-hrană'>
      <img src="https://wallpapercave.com/wp/wp7875599.jpg" />
      <button className='btn' onClick={<HranaRe />}>Hrana reptile</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/reptile/reptile-accesorii'>
      <img src="https://i.pinimg.com/originals/0d/63/5d/0d635d7a99239a6e4d19ae641f55c9de.png" />
      <button className='btn' onClick={<AccesoriiRe/>}>Accesorii</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/reptile/reptile-așternut'>
      <img src="https://c4.wallpaperflare.com/wallpaper/165/124/881/animals-lizard-wallpaper-preview.jpg" />
      <button className='btn' onClick={<AsternutRe/>}>Asternut</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/reptile/reptile-adăpătoare-hrănitoare'>
      <img src="https://files.cults3d.com/uploaders/15923565/illustration-file/8d694a9f-843e-49b8-b003-f96f4a3744b6/20210803_081308.jpg" />
      <button className='btn' onClick={<AdapatoareHranitoareRe/>}>Adapatoare/Hranitoare</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/reptile/reptile-terarii'>
      <img src="https://cdn.shopify.com/s/files/1/1654/9443/collections/19477546_1935748109981829_5424592202600038456_o_82213c03-708d-49cc-904c-609bef630343.jpg?v=1668446004" />
      <button className='btn' onClick={<Terarii/>}>Terarii</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/reptile/reptile-soluții-apă'>
      <img src="https://www.georgiaaquarium.org/wp-content/uploads/2019/07/digital-wallpapers-63.jpg" />
      <button className='btn' onClick={<SolutiiApaRe/>}>Solutii pentru apa</button>
      </Link></div>
        </div>
    </>
  )
}
