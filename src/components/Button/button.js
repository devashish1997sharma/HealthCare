// src/Button.js
import React from 'react';
import './button.css'; // Optional: for styling

const Button = ({ label, onClick, type = 'button', variant = 'primary', size = 'medium' }) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
