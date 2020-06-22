import React, { useState } from "react";

import { PhotoPreview } from "../../components";
import MemberAndCoachCardName from "./MemberAndCoacCardName";
import MemberCardInfo from "./MebersCard/MemberCardInfo";
import CoachCardInfo from "./CoachesCard/CoacheCardInfo";

const MemberAndCoachCard = ({ ...member }) => {
  const [cardState, setCardState] = useState(true);

  return (
    <div className="card-container">
      <PhotoPreview cardState={cardState} member={member} />
      <MemberAndCoachCardName
        cardState={cardState}
        firstName={member.firstName}
        lastName={member.lastName}
      />

      {member.coach ? (
        <CoachCardInfo cardState={cardState} member={member} />
      ) : (
        <MemberCardInfo cardState={cardState} member={member} />
      )}
      {!member.coach && cardState ? (
        <i
          onClick={() => {
            setCardState(false);
          }}
          className="fas fa-chevron-down fa-3x card-container__icon"
        ></i>
      ) : !member.coach ? (
        <i
          onClick={() => {
            setCardState(true);
          }}
          className="fas fa-chevron-up fa-3x card-container__icon"
        ></i>
      ) : null}
    </div>
  );
};

export default MemberAndCoachCard;
