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
        <i
          onClick={() => {
            setMembersFilter(false);
          }}
          className="fas fa-chevron-down fa-3x card-container__icon"
        ></i>
        <h3
          className="u-font"
          // onClick={() => setMembersFilter((prev) => !prev)}
        >
          Nustatyti Filtrus{" "}
          {/* {membersFilter ? (
            
          ) : (
            <i
              onClick={() => {
                setMembersFilter(false);
              }}
              className="fas fa-chevron-up fa-3x card-container__icon"
            ></i>
          )} */}
        </h3>
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
