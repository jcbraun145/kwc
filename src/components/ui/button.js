import React from 'react';

export const Button = ({ children, onClick }) => (
  <button
    className="bg-blue-500 text-white rounded px-4 py-2"
    onClick={onClick}
  >
    {children}
  </button>
);
