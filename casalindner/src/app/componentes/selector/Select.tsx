import React from 'react';
import './Select.css';

export const CustomSelect = (props: any) => {
    const {
        label,
        value,
        onChange,
        options = [],
        height,
        letra
    } = props;

  return (
    <>
    <select name={label} id="select" onChange={onChange} value={value} style={{height:height, width: "auto",backgroundColor:"white", color:"black"}}>
      {options.map((option, index) => (
      <option key={index} value={option.value} style={{fontSize: letra}}>{option.label}</option>
      ))}
    </select>
    </>
  );
};

