import React from "react";

import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div style={{ margin: "auto" }}>
      <img
        style={{ width: "200px", margin: "auto", display: "block" }}
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
