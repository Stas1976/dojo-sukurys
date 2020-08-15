import React, { Component } from "react";
import FilterOption from "./FilterOption";
import FilterItems from "./FilterItems";
import { filterData } from "./data";

class Members extends Component {
  state = {
    data: filterData,
    age: "",
    level: "",
    group: "",
  };

  filterItems(val, type) {
    switch (type) {
      case "level":
        this.setState({ level: val });
        break;
      case "group":
        this.setState({ group: val });
        break;
      case "age":
        this.setState({ age: val });
        break;

      default:
        break;
    }
  }

  render() {
    let filteredItems = filterData;
    let state = this.state;

    ["age", "level", "group"].forEach((filterBy) => {
      let filterValue = state[filterBy];
      console.log("Members Class ", filterValue);

      if (filterValue) {
        filteredItems = filteredItems.filter((item) => {
          return item[filterBy] === filterValue;
        });
      }
    });

    let ageArray = filterData.map((item) => item.age);
    ageArray = ageArray.filter((val, i, self) => self.indexOf(val) === i);

    let levelArray = filterData.map((item) => item.level);
    levelArray = levelArray.filter((val, i, self) => self.indexOf(val) === i);

    let groupArray = filterData.map((item) => item.group);
    groupArray = groupArray.filter((val, i, self) => self.indexOf(val) === i);

    levelArray.unshift("");
    ageArray.unshift("");
    groupArray.unshift("");

    return (
      <div>
        <h3>Members</h3>
        <FilterOption
          data={this.state.data}
          levelArray={levelArray}
          ageArray={ageArray}
          groupArray={groupArray}
          changeOption={this.filterItems.bind(this)}
        />
        <FilterItems data={filteredItems} />
      </div>
    );
  }
}

export default Members;
