import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FS_GROUPS } from "../../constants/fireStoreColections";
import { GROUP } from "../../constants/routes";
// import { groupsArray } from "./groupsInfo";
// import Button from "../../components/Button/Button";

const Groups = () => {
  useFirestoreConnect({ collection: FS_GROUPS });
  // useFirestoreConnect({ collection: FS_COACH });
  const selector = useSelector((state) => state.firestore.ordered);
  // const firestore = useFirestore();
  const coach = "VytautasR";
  let groupByCoach = [];

  //! methode for uploae firestore
  // const setGroups = () => {
  //   groupsArray.map((group) =>
  //     firestore.set({ collection: FS_GROUPS, doc: group.id }, group)
  //   );
  // };

  if (selector?.groups) {
    groupByCoach = selector.groups
      .filter((group) => group.coachId === coach)
      .map((group) => (
        <li className="groups__list-item" key={group.id}>
          <Link to={`${GROUP}/${group.id}`}>
            <h4 className="groups__list-item--h">{group.group}</h4>
            <hr />
            <p className="groups__list-item--p">
              Salė: <span>{group.gym}</span>
            </p>
            <p className="groups__list-item--p">
              Treneris: <span>{group.coach.split(" ", 1)}</span>
            </p>
          </Link>
        </li>
      ));
  }

  return (
    <div className="groups">
      <h3>Grupės {}</h3>
      <ul className="groups__list">{groupByCoach}</ul>
      {/* <Button onClick={setGroups}>Add</Button> */}
    </div>
  );
};

export default Groups;
