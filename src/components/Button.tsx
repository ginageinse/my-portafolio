// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-pink-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-600 transform transition-transform duration-300 hover:scale-105"
  >
    {children}
  </button>
);

export default Button;
