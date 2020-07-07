import React from "react";

const FilterItems = ({ data }) => {
  return (
    <div className="sandbox__filter-items">
      {data.map(function (item, index) {
        return (
          <div className="sandbox__filter-item" key={index}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default FilterItems;
