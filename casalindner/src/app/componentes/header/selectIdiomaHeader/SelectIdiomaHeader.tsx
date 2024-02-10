'use client'
import React,{ useState, useRef } from 'react'
import { CustomSelect } from '../../selector/Select';
import './SelectIdiomaHeader.css'


export const SelectIdiomaHeader = ({SelectIdioma}) => {
  const [idioma, setIdioma] = useState("");

  const handleIdiomaChange = (e) => {
    setIdioma(e.target.value);
    
  };

  const options = [
    {value: 'Argentina', label: 'Argentina'},
    {value: 'Brasil', label: 'Brasil'},
    {value: 'Ecuador', label: 'Ecuador'},
    {value: 'Uruguay', label: 'Uruguay'},
    {value: 'Paraguay', label: 'Paraguay'},
  ]
  return (
        <div className='HeaderIdiomaSelect' style={{ display: 'flex', alignItems: 'center'}}>
          <CustomSelect
          className='SelectorPais'
          label = "País"
          value = {idioma}
          onChange = {handleIdiomaChange}
          options = {options}
          height = {30}
          />
        </div>
  )
}