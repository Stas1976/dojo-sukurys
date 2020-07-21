import React, { useState } from "react";
import Filters from "./Filters";

const ClubMembersFilters = ({ members }) => {
  const [chevronState, setChevronState] = useState(false);
  return (
    <div className="filters">
      <div className="filters__header">
        <h2>Narių Filtravimas</h2>
        {chevronState ? (
          <i
            onClick={() => setChevronState(false)}
            className="fas fa-chevron-up fa-3x "
          />
        ) : (
          <i
            onClick={() => setChevronState(true)}
            className=" fas fa-chevron-down fa-3x "
          />
        )}
      </div>
      <Filters chevronState={chevronState} members={members} />
    </div>
  );
};

export default ClubMembersFilters;
