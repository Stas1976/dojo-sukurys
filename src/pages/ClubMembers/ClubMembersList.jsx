import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { FS_MEMBERS } from "../../constants/fireStoreColections";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";

const ClubMembers = () => {
  useFirestoreConnect({ collection: FS_MEMBERS });
  const members = useSelector((state) => state.firestore.ordered[FS_MEMBERS]);

  if (members) {
    return members.map((member) => (
      <MemberAndCoachCard key={member.id} {...member} />
    ));
  }

  return <Spinner />;
};

export default ClubMembers;
