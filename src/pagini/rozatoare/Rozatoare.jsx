import React from 'react';
import './rozatoare.css'
import { HranaRo } from './submeniu/HranaRo'
import { AccesoriiRo } from './submeniu/AccesoriiRo'
import { AdapatoareHranitoareRo } from './submeniu/AdapatoareHranitoareRo'
import { AsternutRo } from './submeniu/AsternutRo'
import { CustiRo } from './submeniu/CustiRo'
import { LZHRo } from './submeniu/LZHRo'
import { Link } from 'react-router-dom';
export const Rozatoare = () => {
  return (
    <>
      <div className='produse-rozatoare'>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-hrană'>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/785/284/desktop-wallpaper-animals-food-rats-mice-1280x1024-high-quality-animal-food.jpg" />
      <button className='btn' onClick={<HranaRo/>}>Hrana rozătoare</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-accesorii'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG3jH2-E3QlbBWRjoaTIZb9-J6nqw34r8_NQVOmntOyYW9doOoQNC1rIW83y3GtCxJiY&usqp=CAU" />
      <button className='btn' onClick={<AccesoriiRo/>}>Accesorii</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-așternut'>
      <img src="https://m.media-amazon.com/images/I/8152pWCIAzS.jpg" />
      <button className='btn' onClick={<AsternutRo/>}>Asternut</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-adăpătoare-hrănitoare'>
      <img src="https://www.homestratosphere.com/wp-content/uploads/2019/03/3-5-3.jpg" />
      <button className='btn' onClick={<AdapatoareHranitoareRo/>}>Adapatoare/Hranitoare</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-cuști'>
      <img src="https://c1.wallpaperflare.com/preview/179/927/764/mastomys-mice-home-wood.jpg" />
      <button className='btn' onClick={<CustiRo/>}>Custi</button>
      </Link></div>
      <div className='produse-item'>
      <Link to='/rozătoare/rozătoare-lese-zgărzi-hamuri'>
      <img src="https://cdn.shopify.com/s/files/1/0034/3667/5121/products/MORGANNNNNN-2020-12-01T161648.869.jpg?v=1642805132" />
      <button className='btn' onClick={<LZHRo/>}>Lese/hamuri/zgarzi</button>
          </Link></div>
          </div>
        </>
  )
}
