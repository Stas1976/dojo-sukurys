import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, children, exact }) => {
  return (
    <NavLink exact={exact} to={link} activeClassName="navbar__item--active">
      {children}
    </NavLink>
  );
};

export default NavItem;
