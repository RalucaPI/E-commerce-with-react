import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './caine.css'
import { AccesoriiC } from './submeniu/produse/AccesoriiC';
import { CastroaneC } from './submeniu/produse/CastroaneC';
import { CustiC } from './submeniu/produse/CustiC';
import { HranaC } from './submeniu/produse/HranaC';
import { IgienaC} from './submeniu/produse/IgienaC';
import { JucariiC } from './submeniu/produse/JucariiC';
import { LZHC } from './submeniu/produse/LZHC';
import { PPPC } from './submeniu/produse/PPPC';

export const Caine = () => {



  
  return (
    <>
      <div className='produse-câini'>
      <div className='produse-item'>
      <Link to='/câini/câini-hrană'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8q-oic99hcOGqYx6hRlPNAtP5XaQ8pl1aw&usqp=CAU" alt="Hrana" />
      <button className='btn' onClick={<HranaC />}> Hrana câini</button>
      </Link>
    </div>
      <div className='produse-item'>
      <Link to='/câini/câini-accesorii'>
      <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d404d5d-3245-4f50-a14c-af59493444cb.__CR0,0,200,225_PT0_SX200_V1___.jpg" alt="Accesorii" />
      <button className='btn' onClick={<AccesoriiC/>}>Accesorii</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-castroane'>
      <img src="https://t4.ftcdn.net/jpg/03/23/62/39/360_F_323623999_AG1GrNFCvm7AlFzCpfGABjyYuKwp92F9.jpg"  />
      <button className='btn' onClick={<CastroaneC/>}>Castroane</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-cuști'>
      <img src="https://i5.walmartimages.com/asr/42f1e006-d797-4fc1-9bd8-d271cc7f958b_1.b2907dc16d1b6507ffe3fdf4ce2f0119.jpeg"  />
      <button className='btn' onClick={<CustiC/>}>Custi</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-igienă'>
      <img src="https://previews.123rf.com/images/levstudio/levstudio2001/levstudio200100218/137755481-professional-cares-for-a-dog-in-a-specialized-salon-groomers-holding-tools-at-the-hands-pink.jpg"  />
      <button className='btn' onClick={<IgienaC/>}>Igiena</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-jucării'>
      <img src="https://media.istockphoto.com/id/1149531683/photo/dog-chooses-and-fetches-rope-toy-from-hoard-of-pet-toys-in-cart.webp?b=1&s=170667a&w=0&k=20&c=-U-y_sEAcRFOB9FRG-MJ4GA3CTofSio28riRA1LmwJQ="  />
      <button className='btn' onClick={<JucariiC/>}>Jucarii</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-lese-zgărzi-hamuri'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Uw-JxI1Tvbzz-iOAcShjgd6Wfp8EZJWhDA&usqp=CAU"  />
      <button className='btn' onClick={<LZHC/>}>Lese/Zgarzi/Hamuri</button>
        </Link>
      </div>
      <div className='produse-item'>
      <Link to='/câini/câini-perne'>
      <img src="https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nJTIwYmVkfGVufDB8fDB8fHww&w=1000&q=80"  />
      <button className='btn' onClick={<PPPC/>}>Perne</button>
        </Link>
        </div>
      </div>
    </>
  )
}
