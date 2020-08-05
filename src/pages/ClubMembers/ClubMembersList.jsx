import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { FS_MEMBERS } from "../../constants/fireStoreColections";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";
import { ClubMembersFilters } from "../../container";

const ClubMembers = () => {
  const [membersList, setMembersList] = useState(null);
  useFirestoreConnect({ collection: FS_MEMBERS });
  const members = useSelector((state) => state.firestore.ordered[FS_MEMBERS]);

  useEffect(() => {
    setMembersList(members);
  }, [members]);

  if (members) {
    return (
      <>
        <ClubMembersFilters members={members} />
        {membersList &&
          membersList.map((member) => (
            <MemberAndCoachCard key={member.id} {...member} />
          ))}
      </>
    );
  }

  return <Spinner />;
};

export default ClubMembers;
