import React from "react";
import Members from "./Filter/Members";
import MembersFoo from "./Filter/MembersFoo";

const sandbox = () => {
  return (
    <div className="u-font filters">
      <div className="filter">
        <h2>Sandbox</h2>
        <Members />
      </div>
      <div className="filter">
        <h2>Members Foo</h2>
        <MembersFoo />
      </div>
    </div>
  );
};

export default sandbox;
