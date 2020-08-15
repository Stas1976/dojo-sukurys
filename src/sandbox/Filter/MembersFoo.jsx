import React, { useState, useEffect } from "react";
import FilterOption from "./FilterOption";
import FilterItems from "./FilterItems";
import { filterData } from "./data";

const Members = () => {
  const [data, setData] = useState(filterData);
  const [filters, setFilters] = useState({
    age: "",
    level: "",
    group: "",
  });

  const filterItems = (val, type) => {
    switch (type) {
      case "level":
        setFilters({ ...filters, level: val });
        break;
      case "group":
        setFilters({ ...filters, group: val });
        break;
      case "age":
        setFilters({ ...filters, age: val });
        break;

      default:
        break;
    }
  };

  let filteredItems = filterData;

  ["age", "level", "group"].forEach((filterBy) => {
    let filterValue = filters[filterBy];

    if (filterValue) {
      filteredItems = filteredItems.filter((item) => {
        return item[filterBy] === filterValue;
      });
    }
  });

  let ageArray = filterData.map((item) => item.age);
  ageArray = ageArray.filter((val, i, self) => self.indexOf(val) === i);

  let levelArray = filterData.map((item) => item.level);
  levelArray = levelArray.filter((val, i, self) => self.indexOf(val) === i);

  let groupArray = filterData.map((item) => item.group);
  groupArray = groupArray.filter((val, i, self) => self.indexOf(val) === i);

  levelArray.unshift("");
  ageArray.unshift("");
  groupArray.unshift("");

  return (
    <div>
      <h3>Members</h3>
      <FilterOption
        data={data}
        levelArray={levelArray}
        ageArray={ageArray}
        groupArray={groupArray}
        changeOption={filterItems.bind(this)}
      />
      <FilterItems data={filteredItems} />
    </div>
  );
};

export default Members;
