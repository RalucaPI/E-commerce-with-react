import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HranaPesti } from './submeniu/HranaPesti'
import { AccesoriiPe } from './submeniu/AccesoriiPe'
import { AcvariiPe } from './submeniu/AcvariiPe'
import { NisipPe } from './submeniu/NisipPe'
import { SolutiiApa } from './submeniu/SolutiiApa'
import { Tratamente } from './submeniu/Tratamente'
import { Link } from 'react-router-dom';
import './pesti.css'
export const Pesti = () => {
  return (
    <>
      <div className='produse-pesti'>
      <div className='produse-item'>
      <Link to='/pești/pești-hrană'>
      <img src="https://www.thesprucepets.com/thmb/u8orZ954UAy6MkhUQKeEXPtwH9Q=/2144x0/filters:no_upscale():strip_icc()/Fisheseating-GettyImages-940731024-5c2814d2c9e77c0001b0ab83.jpg" />
      <button className='btn' onClick={<HranaPesti />}>Hrana Pesti</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/pești/pești-accesorii'>
      <img src="https://5.imimg.com/data5/DK/RF/YK/ANDROID-95865190/product-jpeg-500x500.jpg" />
      <button className='btn' onClick={<AccesoriiPe/>}>Accesorii</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/pești/pești-acvarii'>
      <img src="https://img.freepik.com/premium-photo/fish-tank-with-plants-fish-it_782419-63911.jpg?w=2000" />
      <button className='btn' onClick={<AcvariiPe/>}>Acvarii</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/pești/pești-nisip'>
      <img src="https://img.freepik.com/premium-photo/beautiful-tropical-fish-white-sand-beach_247622-23594.jpg" />
      <button className='btn' onClick={<NisipPe/>}>Nisip</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/pești/pești-soluții-apă'>
      <img src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/cache.gettyimages.com/2acd57ba243a48f5b931c6517c594cd8.jpg" />
      <button className='btn' onClick={<SolutiiApa/>}>Solutii pentru apa</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/pești/pești-tratamente'>
      <img src="https://bestpetfish.com/wp-content/uploads/2022/07/brian-wangenheim-8HHTyvE8-x0-unsplash.jpg" />
      <button className='btn' onClick={<Tratamente/>}>Tratamente</button>
      </Link></div>
      </div>
    </>
  )
}
