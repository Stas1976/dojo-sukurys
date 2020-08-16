import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_GROUPS,
  FS_LEVELS,
  FS_COACH,
} from "../../constants/fireStoreColections";
import { useSelector } from "react-redux";

const FilterOptions = ({ changeOption }) => {
  const firestoreOptions = useSelector((state) => state.firestore.ordered);

  useFirestoreConnect({ collection: FS_GROUPS });
  useFirestoreConnect({ collection: FS_LEVELS });
  useFirestoreConnect({ collection: FS_COACH });

  let levelsArray, coachesArray, groupsArray;

  if (
    firestoreOptions?.levels &&
    firestoreOptions?.coaches &&
    firestoreOptions?.groups
  ) {
    levelsArray = firestoreOptions.levels;
    coachesArray = firestoreOptions.coaches;
    groupsArray = firestoreOptions.groups;
  }

  const handleChangeOption = (type, event) => {
    const { value } = event.target;
    changeOption(value, type);
  };

  return (
    <div>
      <h3>Filtruoti pagal: </h3>
      <div>
        <div>
          <label>Lygį</label>
          <select id="level" onChange={handleChangeOption.bind(this, "level")}>
            {levelsArray?.map((option, index) => {
              return (
                <option key={index} value={option.label}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Trenerį</label>
          <select id="coach" onChange={handleChangeOption.bind(this, "coach")}>
            {coachesArray?.map((option, index) => {
              return (
                <option
                  key={index}
                  value={`${option.firstName} ${option.lastName}`}
                >
                  {option.firstName} {option.lastName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Grupę</label>
          <select id="group" onChange={handleChangeOption.bind(this, "group")}>
            {groupsArray?.map((option, index) => {
              return (
                <option key={index} value={option.group}>
                  {option.gym} {option.group} {option.coach}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
