import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMemberList } from "../../redux/actions/actions";

class ClubMembersFilters extends Component {
  render() {
    return (
      <div>
        <h1>Filters</h1>
      </div>
    );
  }
}

export default connect(null, filterMemberList)(ClubMembersFilters);
