import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
// import { Link, useRouteMatch } from "react-router-dom";

// import * as ROUTES from "../constants/routes";

import { BurgerButton } from "../components";
import NavItemsList from "./NavItemsList/NavItemsList";
import SideIconsNavbar from "./SideIconBar/SideIconNavbar";

const NavBar = () => {
  const [navbarListState, setNavbarList] = useState(false);

  return (
    <div className="navbar">
      <BurgerButton onClick={() => setNavbarList(!navbarListState)} />
      <SideIconsNavbar />
      <CSSTransition
        in={navbarListState}
        timeout={300}
        classNames="navbar__container"
        unmountOnExit
        mountOnEnter
      >
        <NavItemsList />
      </CSSTransition>
    </div>
  );
};

export default NavBar;
