import React from 'react'
import './Noutati.css'
import animals from './animals.jpg'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <>
    <div className='footer' style={{ backgroundImage: `url(${animals})` }}>    
      <div className="scris">
    <ul>
    <li><Link to="/despre-noi">Despre noi</Link></li>
    <li><Link to="/termeni-și-condiții">Termeni și condiții</Link></li>
    <li><Link to="/condiții-de-transport-și-returnare">Transport și returnare</Link></li>
    <li><Link to="https://anpc.ro/">ANPC</Link></li>
    <li><Link to="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">Soluționarea online a litigiilor</Link></li>
    <li><Link to='/prelucrare-date'>Prelucrarea datelor cu caracter personal</Link></li>
    <li><Link to='politica-de-utilizare-cookie'>Politica de utilizare Cookie-uri</Link></li>
   </ul> </div>
      <div className='contact'>
        <div className='contact-scris'>
        <h3>Detalii contact</h3>
        <p>Telefon: 0725 900 955</p>
        <p>Program:</p>
        <p>Luni-Vineri</p>
        <p>9:00-18:00</p>
        </div>
      </div>
     
  </div> 
 
    </>
  )
}
