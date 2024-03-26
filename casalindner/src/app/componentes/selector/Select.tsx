import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
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
    <>{/* <FormControl fullWidth style={{ height: height }}>
      <InputLabel style={{height:height}}>{label}</InputLabel>
      <Select value={value} onChange={onChange} >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl> */}
    <select name={label} id="select" onChange={onChange} value={value} style={{height:height, width: "auto",backgroundColor:"white", color:"black"}}>
      {options.map((option, index) => (
      <option key={index} value={option.value} style={{fontSize: letra}}>{option.label}</option>
      ))}
    </select>
    </>
  );
};

