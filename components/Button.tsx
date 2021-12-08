import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // no custom props
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}
            className="bg-blue-800 text-gray-100 rounded px-4 py-2 my-2
        hover:bg-blue-700">
            {children}
        </button>
    )
};

export default Button;