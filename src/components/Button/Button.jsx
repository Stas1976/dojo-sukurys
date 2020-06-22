import React from "react";

const Button = ({ type, onClick, children, warning, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={
        warning ? "custom-button custom-button__warning" : "custom-button"
      }
    >
      {children}
    </button>
  );
};

export default Button;
