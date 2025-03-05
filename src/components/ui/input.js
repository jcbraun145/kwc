import React from 'react';

export const Input = ({ value, onChange, ...props }) => (
  <input
    className="border rounded p-2"
    value={value}
    onChange={onChange}
    {...props}
  />
);
