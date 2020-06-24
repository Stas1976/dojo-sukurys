import React from "react";

import MemebrCardLinks from "./MemebrCardLinks";

const MemberCardInfo = ({ member, cardState }) => {
  let timeStamp = null;
  let level = null;
  let coach = null;

  if (member.whenStartTrain) {
    timeStamp = member.whenStartTrain.toDate().toLocaleDateString("lt-LT");
  }

  if (member.coach) {
    coach = member.coach.label;
  }

  if (member.levels) {
    level = member.levels.label;
  }
  return (
    <div className="card-container__info">
      <p>
        el. paštas: <span> {member.email}</span>
      </p>
      <p>tel. nr.: {member.phoneNr}</p>
      <p>grupė: {member.group}</p>
      {!cardState && (
        <div>
          <p>nario ID: {member.clubId}</p>
          <p>lygis: {level}</p>
          <p>Adresas: {member.address}</p>
          <p>Treneris: {member.coachName}</p>
          <p>Kada pradėjo lankyti: {timeStamp}</p>
          <p style={{ marginBottom: "6rem" }}>
            Mokėstis už treniruotės: {member.fee}€
          </p>
          <MemebrCardLinks member={member} />
        </div>
      )}
    </div>
  );
};

export default MemberCardInfo;
