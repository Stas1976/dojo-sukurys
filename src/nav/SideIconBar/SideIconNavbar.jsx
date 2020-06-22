import React from "react";
import * as ROUTES from "../../constants/routes";
import NavItem from "../NavItem/NavItem";

const SideIconsBar = () => {
  return (
    <div className="navbar__side-bar">
      <NavItem exact link={ROUTES.HOME}>
        <i className="navbar__icon fas fa-home fa-4x"></i>
      </NavItem>
      <NavItem exact link={ROUTES.MEMBERS}>
        <i className="navbar__icon fas fa-user fa-4x"></i>
      </NavItem>
      <NavItem exact link={ROUTES.CREATE_NEW_MEMEBER}>
        <i className="navbar__icon  fas fa-user-edit fa-4x"></i>
      </NavItem>
      <NavItem link={ROUTES.GROUPS}>
        <i className="navbar__icon fas fa-users fa-4x"></i>
      </NavItem>
      <NavItem link={ROUTES.COACHES_LIST}>
        <i className="navbar__icon fas fa-user-cog fa-4x"></i>
      </NavItem>
      <NavItem link={ROUTES.SHEDULER}>
        <i className="navbar__icon far fa-calendar-alt fa-4x"></i>
      </NavItem>
      <NavItem link={ROUTES.STATISTIC}>
        <i className="navbar__icon fas fa-chart-bar fa-4x"></i>
      </NavItem>
      <NavItem link={ROUTES.SETTINGS}>
        <i className="navbar__icon fas fa-cogs fa-4x"></i>
      </NavItem>
    </div>
  );
};

export default SideIconsBar;
