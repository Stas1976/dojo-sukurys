import React from "react";
import CoachCardLink from "./CoachCardLink";

const CoacheCardInfo = ({ member }) => {
  return (
    <div>
      <div className="card-container__info">
        <p>el. paštas: {member.mail}</p>
        <p>tel. nr.: {member.phone}</p>
        <p>Lygys: {member.level}</p>
        <CoachCardLink member={member} />
      </div>
    </div>
  );
};

export default CoacheCardInfo;
