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
        <div className='HeaderIdiomaSelect'>
          <CustomSelect
          label = "Idioma"
          value = {idioma}
          onChange = {handleIdiomaChange}
          options = {options}
          />
        </div>
  )
}