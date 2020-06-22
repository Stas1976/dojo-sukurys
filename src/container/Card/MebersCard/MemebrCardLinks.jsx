import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const MemebrCardLinks = ({ member }) => {
  return (
    <div className="card-container__links">
      <Link to={`${ROUTES.MEMBER_EDIT}/${member.id}`}>
        <div className="card-container__link-item">Tvarkyti nario duomenys</div>
      </Link>
      <Link to={`${ROUTES.MEMBER_EXAM}/${member.id}`}>
        <div className="card-container__link-item">Egzaminų kortele</div>
      </Link>
      <Link to={`${ROUTES.MEMBER_STATISTIC}/${member.id}`}>
        <div className="card-container__link-item">Nario Statistika</div>
      </Link>
    </div>
  );
};

export default MemebrCardLinks;
