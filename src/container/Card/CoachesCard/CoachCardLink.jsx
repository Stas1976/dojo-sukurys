import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const CardLinks = ({ member }) => {
  return (
    <Link to={`${ROUTES.COACHE_EDIT}/${member.id}`}>
      <div className="card-container__coach-link">Atnaujinti duomenys</div>
    </Link>
  );
};

export default CardLinks;
