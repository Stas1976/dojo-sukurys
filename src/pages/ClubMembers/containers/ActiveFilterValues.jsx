import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RESET_FILTER } from "../../../redux/types";

const ActiveFilterValues = () => {
  const memberFilter = useSelector((state) => state.reducers.memberFilter);

  let filterProps = [];

  if (memberFilter) {
    for (const prop in memberFilter) {
      filterProps.push(memberFilter[prop]);
    }
  }

  return (
    <div className="filter__active">
      <h3>Aktivus filtrai</h3>
      <ul className="filter__active--list">
        {filterProps
          .filter((item) => item !== "")
          .map((item) => (
            <li className="filter__active--filters" key={item}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActiveFilterValues;
