import React from "react";

const ClubMemberCardName = ({ firstName, lastName }) => {
  return (
    <div className="card-container__name">
      <h4>{firstName}</h4>
      <h4>{lastName}</h4>
    </div>
  );
};

export default ClubMemberCardName;
