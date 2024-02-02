'use client'
import React from 'react';
import './Card.css';
import { CardRubro } from './CardRubro';
import { ContCardProducto } from './ContCardProducto';
import { genoudSillaAna } from '../../../../Public/GenoudSillaAna/GenoudSillaAna.js'

export const Card = () => {
  return (
    <div className='container-Card'>
      <div>
        <p>Card Rubro/Seccion</p>
        <CardRubro CardImg={genoudSillaAna.GenoudSillaAna01} CardName="Sillas" CardRubro="Sillas"/>
        <CardRubro CardImg={genoudSillaAna.GenoudSillaAna01} CardName="Sillas" CardRubro="Sillas"/>
        <CardRubro CardImg={genoudSillaAna.GenoudSillaAna01} CardName="Sillas" CardRubro="Sillas"/>
      </div>
      {/* <div>
        <p>Card Producto</p>
        <ContCardProducto />
      </div> */}
    </div>
  )
}