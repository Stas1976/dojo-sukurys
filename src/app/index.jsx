import React from "react";
import { Switch, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import * as ROUTES from "../constants/routes";
import NavBar from "../nav";
// import Home from "../pages/Home";
// import NewMember from "../pages/NewMember/NewMember";
import Groups from "../pages/Groups/Groups";
import Group from "../pages/Groups/Group/Group";
import { CoachForm, CoachesList, CoachGroupInfo } from "../pages/Coaches";
import {
  ClubMemberList,
  MemberForm,
  MemeberStatistics,
  MemberExamCard,
} from "../pages/ClubMembers";

import Sandbox from "../sandbox/sandbox";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <TransitionGroup>
        <CSSTransition> */}
      <Switch>
        {/* <Route exact path={ROUTES.MEMBERS} component={ClubMemberList} /> */}
        <Route exact path={ROUTES.MEMBERS} component={ClubMemberList} />
        <Route exact path={ROUTES.CREATE_NEW_MEMEBER} component={MemberForm} />
        <Route
          exact
          path={`${ROUTES.MEMBER_EDIT}/:id`}
          component={MemberForm}
        />
        <Route
          exact
          path={`${ROUTES.MEMBER_EXAM}/:id`}
          component={MemberExamCard}
        />
        <Route
          exact
          path={`${ROUTES.MEMBER_STATISTIC}/:id`}
          component={MemeberStatistics}
        />
        <Route exact path={ROUTES.GROUPS} component={Groups} />
        <Route exact path={`${ROUTES.GROUP}/:id`} component={Group} />
        <Route exact path={ROUTES.COACHES_LIST} component={CoachesList} />
        <Route exact path={ROUTES.CREATE_NEW_COACHE} component={CoachForm} />
        <Route exact path={`${ROUTES.COACHE_EDIT}/:id`} component={CoachForm} />
        <Route
          exact
          path={`${ROUTES.COACHE_GROUPS_INFO}/:id`}
          component={CoachGroupInfo}
        />
        <Route exact path="/settings" component={Sandbox} />
      </Switch>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}
    </>
  );
};

export default App;
