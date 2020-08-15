import React from "react";

const FilterItems = ({ data }) => {
  return (
    <div>
      <h3>Items</h3>
      {data.map(function (item, index) {
        return (
          <div className="sandbox__filter-item" key={index}>
            Name {item.name}, Age: {item.age}, level: {item.level}, group:{" "}
            {item.group},
          </div>
        );
      })}
    </div>
  );
};

export default FilterItems;
