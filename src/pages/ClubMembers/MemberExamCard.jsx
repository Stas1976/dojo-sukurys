import React from "react";
import { Link } from "react-router-dom";
import { MEMBERS } from "../../constants/routes";
// import { Button } from "../../components";

const MemberExamCard = () => {
  return (
    <div className="exam">
      <div className="coaches__link">
        <Link to={MEMBERS} className="coaches__link--link">
          <h3 className="coaches__link--header">Grįžti atgal </h3>
        </Link>
      </div>
      <h3>Examm </h3>
    </div>
  );
};

export default MemberExamCard;
