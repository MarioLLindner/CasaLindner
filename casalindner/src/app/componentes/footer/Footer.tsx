'use client'
import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <div className='containerFooter'>
        <div className='mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.857887630876!2d-60.282306125417385!3d-36.98090028689757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959441f51b394947%3A0xf070f9b703158ffb!2sCASA%20LINDNER!5e1!3m2!1ses-419!2sar!4v1708611553039!5m2!1ses-419!2sar" width="400" height="300" style={{border:0}} loading="lazy"></iframe>
        </div>
        <div className='links'>
            <a href="">Contactos</a>
            <a href="">Donde nos encontramos</a>
            <a href="">Quienes Somos</a>
        </div>
      </div>
    </>
  )
}
