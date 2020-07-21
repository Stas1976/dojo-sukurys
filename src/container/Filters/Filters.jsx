import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_LEVELS,
  FS_GROUPS,
  FS_COACH,
} from "../../constants/fireStoreColections";
import Select from "react-select";

//TODO create 3 filters
//TODO create  filter by level
//TODO create filer by group
//TODO  create filer by coach

const Filters = ({ chevronState, members }) => {
  useFirestoreConnect({ collection: FS_LEVELS });
  useFirestoreConnect({ collection: FS_GROUPS });
  useFirestoreConnect({ collection: FS_COACH });
  const levels = useSelector((state) => state.firestore.ordered.levels);
  const groups = useSelector((state) => state.firestore.ordered.groups);
  const coaches = useSelector((state) => state.firestore.ordered.coaches);
  console.log(coaches);

  return (
    <div
      className={
        chevronState ? "filters__container--show" : "filters__container--hide"
      }
    >
      <h3>Filtrai</h3>
      <Select isMulti name="levels" options={levels} />
      <Select isMulti name="groups" options={groups} />
      <Select isMulti name="groups" options={coaches} />
    </div>
  );
};

export default Filters;
