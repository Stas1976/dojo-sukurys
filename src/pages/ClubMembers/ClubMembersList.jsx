import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { FS_MEMBERS } from "../../constants/fireStoreColections";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";
import FilterOptions from "../../container/Filters/FilterOptions";

const ClubMembers = () => {
  const [filtersState, setFiltersState] = useState(false);
  const [filters, setFilters] = useState({
    coach: "",
    level: "",
    group: "",
  });
  useFirestoreConnect({ collection: FS_MEMBERS });
  const members = useSelector((state) => state.firestore.ordered[FS_MEMBERS]);

  const filterItems = (val, type) => {
    switch (type) {
      case "level":
        setFilters({ ...filters, level: val });
        break;
      case "group":
        setFilters({ ...filters, group: val });
        break;
      case "coach":
        setFilters({ ...filters, coach: val });
        break;

      default:
        break;
    }
  };

  let filteredMembers = members;

  ["coach", "level", "group"].forEach((filterBy) => {
    let filterValue = filters[filterBy];

    console.log(filterValue);

    if (filterValue) {
      filteredMembers = filteredMembers.filter((item) => {
        return item[filterBy] === filterValue;
      });
    }
  });

  if (members) {
    return (
      <>
        <div className="club-members">
          <h2
            className="club-members__filters"
            onClick={() => setFiltersState(!filtersState)}
          >
            Filtrai
            {filtersState ? (
              <i className="fas fa-chevron-up fa-3x club-members__chevron " />
            ) : (
              <i className="fas fa-chevron-down fa-3x club-members__chevron" />
            )}
          </h2>
        </div>
        {filtersState && (
          <FilterOptions
            members={members}
            changeOption={filterItems.bind(this)}
          />
        )}
        {filteredMembers.map((member) => (
          <MemberAndCoachCard key={member.id} {...member} />
        ))}
      </>
    );
  }

  return <Spinner />;
};

export default ClubMembers;
