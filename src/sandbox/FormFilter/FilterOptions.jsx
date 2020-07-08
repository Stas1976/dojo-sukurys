import React from "react";

const FilterOptions = ({
  benderOptions,
  nationOptions,
  ageOptions,
  changeOption,
}) => {
  const handleChangeOption = (type, event) => {
    const value = event.target.value;
    changeOption(value, type);
    console.log(type);
  };

  return (
    <div className="sandbox__filter-options">
      <div className="sandbox__filter-option">
        <label>Bender</label>
        <select id="bender" onChange={handleChangeOption.bind(this, "bender")}>
          {benderOptions.map(function (option, index) {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>

        <label>Nation</label>
        <select id="nation" onChange={handleChangeOption.bind(this, "nation")}>
          {nationOptions.map(function (option, index) {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>

        <label>Age</label>
        <select id="age" onChange={handleChangeOption.bind(this, "age")}>
          {ageOptions.map(function (option, index) {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
