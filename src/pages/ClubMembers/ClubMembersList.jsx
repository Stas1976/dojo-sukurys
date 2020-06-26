import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { FS_MEMBERS } from "../../constants/fireStoreColections";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";
import { FilterMembers } from ".";

const ClubMembers = () => {
  useFirestoreConnect({ collection: FS_MEMBERS });
  const members = useSelector((state) => state.firestore.ordered[FS_MEMBERS]);
  const [membersFilter, setMembersFilter] = useState(false);

  if (members) {
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
            <h2>Filtruoti pagal </h2>
            <i
              onClick={() => setMembersFilter(false)}
              className="fas fa-chevron-up fa-3x"
            ></i>
          </div>
        )}

        {membersFilter && <FilterMembers />}
        {members.map((member) => (
          <MemberAndCoachCard key={member.id} {...member} />
        ))}
      </>
    );
  }

  return <Spinner />;
};

export default ClubMembers;
