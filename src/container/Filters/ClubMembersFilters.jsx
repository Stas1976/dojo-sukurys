import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMemberList } from "../../redux/actions/actions";

class ClubMembersFilters extends Component {
  render() {
    const { members, membersList } = this.props;

    test = members.filter((member) => {
      return member.firstName !== "Nemunas";
    });
    return (
      <div>
        <h1>Filters</h1>
      </div>
    );
  }
}

export default connect(null, filterMemberList)(ClubMembersFilters);
