import React from 'react';
import './textInput.css'; // Optional: for styling
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const TextInput = ({ icon, placeholder, value, onChange, handleTogglePassword, showPassword, type='text', centerPlaceholder }) => {
  const isPassword = type === 'password';
  return (
    <div className="text-input">
      {icon && <span className="icon">{icon}</span>}
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${centerPlaceholder ? 'centered' : ''}`}
      />
 {isPassword && (
        <span className="icon" onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
};

export default TextInput;