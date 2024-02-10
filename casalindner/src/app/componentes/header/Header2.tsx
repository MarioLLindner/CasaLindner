'use client'
import React, { useState, useRef } from 'react'
import './Header2.css'
import { SelectIdiomaHeader } from './selectIdiomaHeader/SelectIdiomaHeader';
import { SelectSearchHeader } from './buscador/selectSearch';
import Logo3 from '../../../../Public/Carrousel/Logo3.png'


export const Header2 = () => {


  return (
    <div className='container-Header'>
          <img className='LogoHeader' src={Logo3.src} alt="CasaLindner" style={{ width: '100%', height: '75px', objectFit: 'contain' }} />
    </div>

  )
}
