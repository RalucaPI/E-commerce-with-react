
import  informatii  from './imagini/informatii.png'
import  lizzardreducere  from './imagini/lizzardreducere.png'
import  primaComanda  from './imagini/primaComanda.png'
import  reducere10  from './imagini/reducere10.png'
import  sterilizate  from './imagini/sterilizate.png'
import  transport  from './imagini/transport.png'

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:reducere10,
     },
  {
    id: 2,
    imageurl:primaComanda,
     },
  {
    id:3,
    imageurl:lizzardreducere,
     },
  {
    id: 4,
    imageurl:sterilizate,
     },
  {
    id: 5,
    imageurl:informatii,
     },
  {
    id: 6,
    imageurl:transport,
     },
];