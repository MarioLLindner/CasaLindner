'use client'
import React, { useState } from 'react'
import { CustomSelect } from '../../selector/Select';
import './selectSearch.css'


export const SelectSearchHeader = ({ SelectSearch }) => {
  const [filtro, setFiltro] = useState("");

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);

  };

  const options = [
    { value: 'Muebles', label: 'Muebles' },
    { value: 'MesasySillas', label: 'Mesas y Sillas' },
    { value: 'Jardin', label: 'Jardin' },
    { value: 'Pesca', label: 'Pesca' },
    { value: 'Camping', label: 'Camping' },
  ]
  return (
    <div className='filterSelect'>
      <div className='HeaderFiltroSelect'>
        <CustomSelect
          label="Rubro"
          value={filtro}
          onChange={handleFiltroChange}
          options={options}
        />
      </div>
      <div className='inputHeader'>
        <input type="text" placeholder="Que Desea Buscar?" />
      </div>
      <button className="btn-lupa" onClick={() => SelectSearch({ filtro })}>
      </button>
    </div>
  )
}