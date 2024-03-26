'use client'
import React, { useState, useRef } from 'react'
import './Header.css'
import { SelectIdiomaHeader } from './selectIdiomaHeader/SelectIdiomaHeader';
import { SelectSearchHeader } from './buscador/selectSearch';
import Logo from '../../../../Public/Carrousel/Logo.png'


export const Header = () => {


  return (
    <div className='container-Header'>
      <div className='HeaderNombreAndIdioma'>
        <div>
          <SelectIdiomaHeader />
        </div>
      </div>
      <div className='Search-Header'>
        <SelectSearchHeader />
      </div>
      <div className='userRegisterAndCarrito'>
        <div className='HeaderUser'>
          <button className='loginRegister'>
            Iniciar Sesion
          </button>
          <button className='loginRegister'>
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
