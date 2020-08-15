import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_GROUPS,
  FS_LEVELS,
  FS_COACH,
} from "../../constants/fireStoreColections";
import { useSelector } from "react-redux";

const FilterOptions = ({
  levelArray,
  coachArray,
  groupArray,
  changeOption,
}) => {
  const firestoreOptions = useSelector((state) => state.firestore.ordered);

  useFirestoreConnect({ collection: FS_GROUPS });
  useFirestoreConnect({ collection: FS_LEVELS });
  useFirestoreConnect({ collection: FS_COACH });

  console.log(firestoreOptions.level);

  const handleChangeOption = (type, event) => {
    const { value } = event.target;
    changeOption(value, type);
  };
  console.log(changeOption);
  return (
    <div>
      <h3>Optios</h3>
      <label>Level</label>
      <select id="level" onChange={handleChangeOption.bind(this, "level")}>
        {firestoreOptions.level.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label>Coach</label>
      <select id="Coach" onChange={handleChangeOption.bind(this, "coach")}>
        {coachArray.map((option, index) => {
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

export default FilterOptions;
