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
    } = props;

  return (
    <FormControl fullWidth style={{ height: height }}>
      <InputLabel style={{height:height}}>{label}</InputLabel>
      <Select value={value} onChange={onChange} >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

