import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_LEVELS,
  FS_GROUPS,
  FS_COACH,
} from "../../constants/fireStoreColections";
import Select from "react-select";

//TODO  create filer by coach

const Filters = ({ chevronState, members }) => {
  const [selectLevel, setSelectLevel] = useState("");
  const [selectGroup, setSelectGroup] = useState("");
  const [selectCoach, setSelectCoach] = useState("");

  useFirestoreConnect({ collection: FS_LEVELS });
  useFirestoreConnect({ collection: FS_GROUPS });
  useFirestoreConnect({ collection: FS_COACH });
  const levels = useSelector((state) => state.firestore.ordered.levels);
  const groups = useSelector((state) => state.firestore.ordered.groups);
  const coaches = useSelector((state) => state.firestore.ordered.coaches);

  let groupsLabel, coachesLabel, levelsLabel;

  if (levels) {
    levelsLabel = levels.filter((level) => level.label !== "lygis");
  }

  if (groups) {
    groupsLabel = groups
      .filter((group) => group.coach !== "Treneris")
      .map((group) => {
        return {
          value: group.id,
          label: `${group.gym}, ${group.group}, ${group.coach}`,
        };
      });
  }

  if (coaches) {
    coachesLabel = coaches
      .filter((coach) => coach.lastName !== "Treneris")
      .map((coach) => {
        return {
          value: coach.id,
          label: `${coach.firstName} ${coach.lastName}`,
        };
      });
  }

  //  ["levels", "coaches", "groups"].forEach((item)=>{
  //    let filterValue =
  //  })

  return (
    <div
      className={
        chevronState ? "filters__container--show" : "filters__container--hide"
      }
    >
      <h3>Filtruoti pagal lygį:</h3>
      <Select
        onChange={(e) => setSelectLevel(e.label)}
        name="levels"
        options={levelsLabel}
      />
      <h3>Filtruoti pagal grupę:</h3>
      <Select
        onChange={(e) => setSelectGroup(e.label)}
        name="groups"
        options={groupsLabel}
      />
      <h3>Filtruoti pagal trenerį:</h3>
      <Select
        onChange={(e) => setSelectCoach(e.label)}
        name="coaches"
        options={coachesLabel}
      />
    </div>
  );
};

export default Filters;
