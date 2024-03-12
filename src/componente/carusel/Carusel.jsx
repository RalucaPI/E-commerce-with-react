import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaruselItem from "./CarouselItem";
import { productData, responsive } from "./data";
import './style.css';


export function Carusel() {
  
   const product = productData.map((item) => (
    <CaruselItem
      url={item.imageurl}
    />
  ));

  return (
   <div className="Carusel">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
