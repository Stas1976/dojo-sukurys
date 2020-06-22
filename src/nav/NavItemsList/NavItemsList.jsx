import React from "react";

import * as ROUTES from "../../constants/routes";
import NavItem from "../NavItem/NavItem";

const NavItemsList = () => {
  return (
    <div className="navbar__container">
      <NavItem exact link={ROUTES.HOME}>
        <div className="navbar__item">pagrindinis</div>
      </NavItem>
      <NavItem link={ROUTES.MEMBERS}>
        <div className="navbar__item">klubo nariai</div>
      </NavItem>
      <NavItem link={ROUTES.CREATE_NEW_MEMEBER}>
        <div className="navbar__item">naujas naris</div>
      </NavItem>
      <NavItem link={ROUTES.GROUPS}>
        <div className="navbar__item">grupės</div>
      </NavItem>
      <NavItem link={ROUTES.COACHES_LIST}>
        <div className="navbar__item">treneriai</div>
      </NavItem>
      <NavItem link={ROUTES.SHEDULER}>
        <div className="navbar__item">tvarkaraščiai</div>
      </NavItem>
      <NavItem link={ROUTES.STATISTIC}>
        <div className="navbar__item">statistika</div>
      </NavItem>
      <NavItem link={ROUTES.SETTINGS}>
        <div className="navbar__item">įrankiai</div>
      </NavItem>
    </div>
  );
};

export default NavItemsList;
