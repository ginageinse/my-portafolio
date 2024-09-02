// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, download, href }) => {
  const buttonClass = `inline-block px-4 py-2 min-w-[180px] bg-[#c993a4] text-white rounded-[6px] hover:bg-[#a27f8a] transition duration-300 text-center`;
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={buttonClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
