'use client'
import React, { useState, useRef } from 'react'
import './Header.css'
import { SelectIdiomaHeader } from './selectIdiomaHeader/SelectIdiomaHeader';
import { SelectSearchHeader } from './buscador/selectSearch';
import Logo from '../../../../Public/Carrousel/Logo1.png'


export const Header = () => {


  return (
    <div className='container-Header'>
      <div className='HeaderNombreAndIdioma'>
        <div className='HeaderNombre'>
          <img className='LogoHeader' src={Logo.src} alt="CasaLindner" />
        </div>
        <div>
          <SelectIdiomaHeader />
        </div>
      </div>
      <div className='Search-Header'>
        <SelectSearchHeader />
      </div>
      <div className='userRegisterAndCarrito'>
        <div className='HeaderUser'>
          <button>
            Iniciar Sesion
          </button>
          <button>
            Registrarse
          </button>
        </div>
        <div className='HeaderCarritodeCompras'>
          <a
            href='PAGE CARRITO'
            className='btn-carrito'>
          </a>
        </div>
      </div>
    </div>
  )
}
