import { Pornire } from './drum/Pornire'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './HomePage';
import Navbar from './componente/navbar/Navbar';
import { Footer } from './pagini/noutati/Footer';
import { AfisareComanda } from './pagini/comanda/AfisareComanda';
import { TermeniConditii } from './pagini/noutati/altele/TermeniConditii';
import { Transport } from './pagini/noutati/altele/Transport';
import { DespreNoi } from './pagini/noutati/altele/DespreNoi';
import { Cookies } from './pagini/noutati/altele/Cookies';
import { PrelucrareDate } from './pagini/noutati/altele/PrelucrareDate';
import { Cos } from './pagini/produse/Cos';
import { ComandaR } from './pagini/produse/ComandaR';
import {Nou} from './pagini/conectare/Nou'
import Viz from './componente/navbar/Viz'
import NouViz from './pagini/noutati/NouViz';
import { Cont } from './pagini/conectare/Cont';
import { Inregistrare } from './pagini/conectare/Inregistrare';
import { Conectare } from './pagini/conectare/Conectare'
import { Schimbare } from './pagini/conectare/Schimbare';
import { Voice } from './cautareVocala/Voice'
import { CheckOutSuccess } from './pagini/produse/CheckOutSuccess';
import { Pisica } from './pagini/pisica/Pisica'
import { Accesorii } from './pagini/pisica/submeniu/produse/Accesorii';
import { Ansambluri } from './pagini/pisica/submeniu/produse/Ansambluri';
import { Asternut } from './pagini/pisica/submeniu/produse/Asternut';
import { Castroane } from './pagini/pisica/submeniu/produse/Castroane';
import { Custi } from './pagini/pisica/submeniu/produse/Custi';
import { Hrana } from './pagini/pisica/submeniu/produse/Hrana';
import { Igiena } from './pagini/pisica/submeniu/produse/Igiena';
import { Jucarii } from './pagini/pisica/submeniu/produse/Jucarii';
import { Litiere } from './pagini/pisica/submeniu/produse/Litiere';
import { LZH } from './pagini/pisica/submeniu/produse/LZH';
import { PPP } from './pagini/pisica/submeniu/produse/PPP';

import { Caine } from './pagini/caine/Caine'
import { AccesoriiC } from './pagini/caine/submeniu/produse/AccesoriiC';
import { CastroaneC } from './pagini/caine/submeniu/produse/CastroaneC';
import { CustiC } from './pagini/caine/submeniu/produse/CustiC';
import { HranaC } from './pagini/caine/submeniu/produse/HranaC';
import { IgienaC} from './pagini/caine/submeniu/produse/IgienaC';
import { JucariiC } from './pagini/caine/submeniu/produse/JucariiC';
import { LZHC } from './pagini/caine/submeniu/produse/LZHC';
import { PPPC } from './pagini/caine/submeniu/produse/PPPC';

import { Pasari } from './pagini/pasari/Pasari'
import { AccesoriiPa } from './pagini/pasari/submeniu/produse/AccesoriiPa';
import { AdapatoareHranitoare } from './pagini/pasari/submeniu/produse/AdapatoareHranitoare';
import { Colivii } from './pagini/pasari/submeniu/produse/Colivii';
import { HranaPa } from './pagini/pasari/submeniu/produse/HranaPa';
import { JucariiPa } from './pagini/pasari/submeniu/produse/JucariiPa';


import { Reptile } from './pagini/reptile/Reptile'
import { HranaRe } from './pagini/reptile/submeniu/produse/HranaRe'
import { AccesoriiRe } from './pagini/reptile/submeniu/produse/AccesoriiRe'
import { AdapatoareHranitoareRe } from './pagini/reptile/submeniu/produse/AdapatoareHranitoareRe'
import { AsternutRe } from './pagini/reptile/submeniu/produse/AsternutRe'
import { SolutiiApaRe } from './pagini/reptile/submeniu/produse/SolutiiApaRe';
import { Terarii } from './pagini/reptile/submeniu/produse/Terarii';

import { Rozatoare } from './pagini/rozatoare/Rozatoare'
import { HranaRo } from './pagini/rozatoare/submeniu/HranaRo'
import { AccesoriiRo } from './pagini/rozatoare/submeniu/AccesoriiRo'
import { AdapatoareHranitoareRo } from './pagini/rozatoare/submeniu/AdapatoareHranitoareRo'
import { AsternutRo } from './pagini/rozatoare/submeniu/AsternutRo'
import { CustiRo } from './pagini/rozatoare/submeniu/CustiRo'
import { LZHRo } from './pagini/rozatoare/submeniu/LZHRo'

import { Pesti } from './pagini/pesti/Pesti'
import { HranaPesti } from './pagini/pesti/submeniu/HranaPesti'
import { AccesoriiPe } from './pagini/pesti/submeniu/AccesoriiPe'
import { AcvariiPe } from './pagini/pesti/submeniu/AcvariiPe'
import { NisipPe } from './pagini/pesti/submeniu/NisipPe'
import { SolutiiApa } from './pagini/pesti/submeniu/SolutiiApa'
import { Tratamente } from './pagini/pesti/submeniu/Tratamente'
import { Plata } from './pagini/produse/Plata';
import 'firebase/firestore';
import React, { useState } from 'react';
function App() {

  


  return (
    <>
      <Router>
        <Viz>
      <Navbar  />
        </Viz>
        <Routes>
          <Route path='/' element={<Pornire/>}/>
          <Route path='/acasă' element={<HomePage />} />
          <Route path='/pisici' element={<Pisica />} />
          <Route path='/pisici/pisici-hrană' element={<Hrana />} />
          <Route path='/pisici/pisici-accesorii' element={<Accesorii />} />
          <Route path='/pisici/pisici-ansambluri' element={< Ansambluri/>} />
          <Route path='/pisici/pisici-așternut' element={< Asternut/>} />
          <Route path='/pisici/pisici-castroane' element={< Castroane/>} />
          <Route path='/pisici/pisici-cuști' element={< Custi />} />         
          <Route path='/pisici/pisici-igienă' element={< Igiena />} />
          <Route path='/pisici/pisici-jucării' element={< Jucarii />} />
          <Route path='/pisici/pisici-lese-zgărzi-hamuri' element={< LZH />} />
          <Route path='/pisici/pisici-litiere' element={< Litiere />} />
          <Route path='/pisici/pisici-perne-paturi' element={< PPP />} />

          <Route path='/câini' element={<Caine />} />
          <Route path='/câini/câini-hrană' element={<HranaC />} />
          <Route path='/câini/câini-accesorii' element={<AccesoriiC />} />
          <Route path='/câini/câini-castroane' element={< CastroaneC/>} />
          <Route path='/câini/câini-cuști' element={< CustiC />} />          
          <Route path='/câini/câini-igienă' element={< IgienaC />} />
          <Route path='/câini/câini-jucării' element={< JucariiC />} />
          <Route path='/câini/câini-lese-zgărzi-hamuri' element={< LZHC />} />
          <Route path='/câini/câini-perne' element={< PPPC />} />

          <Route path='/păsări' element={<Pasari />} />
          <Route path='/păsări/păsări-hrană' element={<HranaPa />} />
          <Route path='/păsări/păsări-accesorii' element={<AccesoriiPa />} />
          <Route path='/păsări/păsări-adăpătoare-hrănitoare' element={< AdapatoareHranitoare/>} />
          <Route path='/păsări/păsări-colivii' element={< Colivii/>} />
          <Route path='/păsări/păsări-jucării' element={< JucariiPa/>} />
          
          <Route path='/pești' element={<Pesti />} /> 
          <Route path='/pești/pești-hrană' element={<HranaPesti />} />
          <Route path='/pești/pești-accesorii' element={<AccesoriiPe />} />
          <Route path='/pești/pești-acvarii' element={< AcvariiPe/>} />
          <Route path='/pești/pești-nisip' element={< NisipPe/>} />
          <Route path='/pești/pești-soluții-apă' element={< SolutiiApa/>} />
          <Route path='/pești/pești-tratamente' element={< Tratamente />} />

          <Route path='/rozătoare' element={<Rozatoare />} />
          <Route path='/rozătoare/rozătoare-hrană' element={<HranaRo />} />
          <Route path='/rozătoare/rozătoare-accesorii' element={<AccesoriiRo />} />
          <Route path='/rozătoare/rozătoare-adăpătoare-hrănitoare' element={< AdapatoareHranitoareRo/>} />
          <Route path='/rozătoare/rozătoare-așternut' element={< AsternutRo/>} />
          <Route path='/rozătoare/rozătoare-cuști' element={< CustiRo/>} />
          <Route path='/rozătoare/rozătoare-lese-zgărzi-hamuri' element={< LZHRo/>} />
          
          <Route path='/reptile' element={<Reptile />} />
          <Route path='/reptile/reptile-hrană' element={<HranaRe />} />
          <Route path='/reptile/reptile-accesorii' element={<AccesoriiRe />} />
          <Route path='/reptile/reptile-adăpătoare-hrănitoare' element={< AdapatoareHranitoareRe/>} />
          <Route path='/reptile/reptile-așternut' element={< AsternutRe/>} />
          <Route path='/reptile/reptile-soluții-apă' element={< SolutiiApaRe/>} />
          <Route path='/reptile/reptile-terarii' element={< Terarii />} />
          
          <Route path='/conectare' element={<Conectare/>} />
          <Route path='/înregistrare' element={<Nou/>} />
          <Route path='/cont' element={<Cont />} />
          <Route path='/coș' element={<Cos />} />
          <Route path='/termeni-și-condiții' element={<TermeniConditii />} />
          <Route path='/condiții-de-transport-și-returnare' element={<Transport />} />
          <Route path='/despre-noi' element={<DespreNoi />} />
          <Route path='/prelucrare-date' element={<PrelucrareDate />} />
          <Route path='/politica-de-utilizare-cookie' element={<Cookies />} />
          <Route path='/schimbă-parola' element={<Schimbare />} />
          <Route path='/cautare-vocala' element={<Voice />} />
          <Route path='/plată-finalizată-cu-succes' element={<CheckOutSuccess/> }/>
          <Route path='/plata' element={<Plata/> }/>
          <Route path='/comandă' element={<AfisareComanda />} />
          <Route path='/comandă-efectuată' element={<ComandaR/> }/>
          
        </Routes>
        <NouViz>
          <Footer/>
      </NouViz>
      </Router>
    </>
  )
}

export default App
