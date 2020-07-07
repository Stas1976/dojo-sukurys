import React, { useState } from "react";
import SetForm from "./SetForm";

const Forms = ({ ...item }) => {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="u-font sandbox">
        <>
          <h3>Forms</h3>
          <p>
            {item.name} {item.lastName}
          </p>
        </>
        {state ? (
          <i
            onClick={() => setState(false)}
            className="fas fa-chevron-up fa-3x"
          />
        ) : (
          <i
            onClick={() => setState(true)}
            className="fas fa-chevron-down fa-3x"
          />
        )}
      </div>

      <SetForm state={state} />
    </>
  );
};

export default Forms;
