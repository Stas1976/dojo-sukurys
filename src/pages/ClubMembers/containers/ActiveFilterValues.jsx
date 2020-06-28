import React from "react";
import { useSelector } from "react-redux";

const ActiveFilterValues = () => {
  const memberFilter = useSelector((state) => state.reducers.memberFilter);

  let filterProps = [];

  if (memberFilter) {
    for (const prop in memberFilter) {
      filterProps.push(memberFilter[prop]);
    }
  }
  console.log(filterProps);

  return (
    <>
      <h3>Aktivus filtrai</h3>
      <ul>
        {filterProps
          .filter((item) => item !== "")
          .map((item) => (
            <li key={item}>
              {item}
              <i className="far fa-times-circle fa-lg"></i>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ActiveFilterValues;
