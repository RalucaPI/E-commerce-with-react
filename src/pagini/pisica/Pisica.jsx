import React from 'react'
import './style.css'
import { Accesorii } from './submeniu/produse/Accesorii';
import { Ansambluri } from './submeniu/produse/Ansambluri';
import { Asternut } from './submeniu/produse/Asternut';
import { Castroane } from './submeniu/produse/Castroane';
import { Custi } from './submeniu/produse/Custi';
import { Hrana } from './submeniu/produse/Hrana';
import { Igiena } from './submeniu/produse/Igiena';
import { Jucarii } from './submeniu/produse/Jucarii';
import { Litiere } from './submeniu/produse/Litiere';
import { LZH } from './submeniu/produse/LZH';
import { PPP } from './submeniu/produse/PPP';
import { Link } from 'react-router-dom';
export const Pisica = () => {
    

    return (
      <>
                    <div className='produse-pisici'>
                            
          <div className='produse-item'>
            <Link to='/pisici/pisici-hrană'>
              <img src="https://images.wallpaperscraft.com/image/single/cat_fish_table_67256_1920x1080.jpg"  />
      <button className='btn' onClick={<Hrana />}>Hrana pisici</button>
            </Link></div>
          <div className='produse-item' >
      <Link to='/pisici/pisici-accesorii'>
              <img src="https://mobileimages.lowes.com/productimages/c021d18c-67d3-4916-b5b9-444cdfb3699b/00681873.jpg?size=mpdhi"  />
      <button className='btn' onClick={<Accesorii/>}>Accesorii</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-ansambluri'>
              <img src="https://t4.ftcdn.net/jpg/02/64/29/85/360_F_264298537_WRiUZpMevo0Xp7FLhbEX2Dz2ph0vHq9e.jpg"  />
      <button className='btn' onClick={<Ansambluri/>}>Ansambluri</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-așternut'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ065LkMTJE_TSMyT8X7XarYUF4lGnGRuvP8d66_gcXMlTQl1L0xFGSIp28Z8TWyKDDLM&usqp=CAU"  />
      <button className='btn' onClick={<Asternut/>}>Asternut</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-castroane'>
              <img src="https://cache.desktopnexus.com/thumbseg/1571/1571868-bigthumbnail.jpg"  />
      <button className='btn' onClick={<Castroane/>}>Castroane</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-cuști'>
              <img src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/05/Travelling-by-train-with-a-cat.jpg"  />
      <button className='btn' onClick={<Custi/>}>Custi</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-igienă'>
              <img src="https://static.wixstatic.com/media/f21c6b_7356bc6fdad44e448942cf5d5a3f699d~mv2.jpg/v1/fill/w_597,h_457,al_c,q_90/f21c6b_7356bc6fdad44e448942cf5d5a3f699d~mv2.webp"  />
      <button className='btn' onClick={<Igiena/>}>Igiena</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-jucării'>
              <img src="https://e0.pxfuel.com/wallpapers/218/51/desktop-wallpaper-orange-white-kitty-orange-kitten.jpg"  />
      <button className='btn' onClick={<Jucarii/>}>Jucarii</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-lese-zgărzi-hamuri'>
              <img src="https://e0.pxfuel.com/wallpapers/271/419/desktop-wallpaper-cat-head-beautiful-animals.jpg"  />
      <button className='btn' onClick={<LZH/>}>Lese/Zgarzi/Hamuri</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-litiere'>
              <img src="https://us.123rf.com/450wm/lightspruch/lightspruch1808/lightspruch180800014/106914199-young-maine-coon-cat-sitting-in-a-closed-litter-box-and-looking-sideways.jpg?ver=6"  />
      <button className='btn' onClick={<Litiere/>}>Litiere</button>
            </Link></div>
          <div className='produse-item'>
      <Link to='/pisici/pisici-perne-paturi'>
              <img src="https://w0.peakpx.com/wallpaper/349/845/HD-wallpaper-cat-pillow-paw-siameza-pisici-white-blue-eyes.jpg"  />
      <button className='btn' onClick={<PPP/>}>Perne</button>
            </Link>
          </div>
          </div>
        </>
  )
}
