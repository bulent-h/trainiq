import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void; // Make onClick optional
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const ActionButton: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-2 text-gray-100 dark:text-gray-100 border-gray-300 dark:border-gray-700 bg-green-500 dark:bg-green-500 text-xs rounded-xl p-1.5 hover:bg-green-400 active:bg-gray-400 dark:active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 ${className}`}
    >
      {text} 
    </button>
  );
};

export default ActionButton;
