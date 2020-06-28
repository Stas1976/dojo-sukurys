import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { FS_MEMBERS } from "../../constants/fireStoreColections";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";
import FiltersForm from "./containers/FiltersForm";

const ClubMembers = () => {
  useFirestoreConnect({ collection: FS_MEMBERS });
  const members = useSelector((state) => state.firestore.ordered[FS_MEMBERS]);
  const [membersFilter, setMembersFilter] = useState(false);
  const { group, coach, level } = useSelector(
    (state) => state.reducers.memberFilter
  );

  if (members) {
    let filteredMembers = members;
    if (group) {
      filteredMembers = members.filter((member) => member.group === group);
    }
    if (coach) {
      filteredMembers = members.filter((member) => member.coachName === coach);
    }
    if (level) {
      filteredMembers = members.filter((member) => member.level === level);
    }

    return (
      <>
        {!membersFilter ? (
          <div className="club-members__filter">
            <h3>Nustatyti Filtrus </h3>
            <i
              onClick={() => setMembersFilter(true)}
              className="fas fa-chevron-down fa-3x"
            ></i>
          </div>
        ) : (
          <div className="club-members__filter">
            <h3>Filtruoti pagal </h3>
            <i
              onClick={() => setMembersFilter(false)}
              className="fas fa-chevron-up fa-3x"
            ></i>
          </div>
        )}

        {membersFilter && <FiltersForm membersFilter={membersFilter} />}

        {filteredMembers.map((member) => (
          <MemberAndCoachCard key={member.id} {...member} />
        ))}
      </>
    );
  }

  return <Spinner />;
};

export default ClubMembers;
