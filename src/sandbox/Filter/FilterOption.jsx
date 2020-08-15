import React from "react";

const FilterOption = ({ levelArray, ageArray, groupArray, changeOption }) => {
  const handleChangeOption = (type, event) => {
    const { value } = event.target;
    changeOption(value, type);
  };

  return (
    <div>
      <h3>Options</h3>
      <label>Age</label>
      <select id="age" onChange={handleChangeOption.bind(this, "age")}>
        {ageArray.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label>Level</label>
      <select id="level" onChange={handleChangeOption.bind(this, "level")}>
        {levelArray.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label>Group</label>
      <select id="group" onChange={handleChangeOption.bind(this, "group")}>
        {groupArray.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterOption;
