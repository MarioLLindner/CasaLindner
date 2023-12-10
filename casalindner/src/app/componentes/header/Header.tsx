'use client'
import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='container-Header'>
      <div>
      <div className='HeaderNombre'>Nombre o Logo</div>
      <div className='HeaderIdiomaSelect'>Idioma o Region</div>
      </div>
      <div>
        <div className='HeaderSelectorBuscador'>Selector</div>
        <div className='HeaderImputBuscador'>Buscador</div>
        <div className='HeaderLupa'>Lupa</div>
      </div>
      <div>
        <div className='HeaderUser'>Usuario</div>
        <div className='HeaderCarritodeCompras'>Carrito</div>
      </div>
    </div>
  )
}
