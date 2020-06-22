import React from "react";

const BurgerButton = ({ onClick }) => {
  return (
    <div className="burger-button">
      <input
        type="checkbox"
        className="burger-button__checkbox"
        id="burger-button-input"
      />
      <label
        onClick={onClick}
        htmlFor="burger-button-input"
        className="burger-button__label "
      >
        <span className="burger-button__icon"></span>
      </label>
    </div>
  );
};

export default BurgerButton;
