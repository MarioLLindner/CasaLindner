import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const CustomSelect = (props: any) => {
    const {
        label,
        value,
        onChange,
        options = [],
    } = props;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

