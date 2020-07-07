import React from "react";
import { filterData } from "./data";
import FilterItems from "./FilterItems";
import FilterOptions from "./FilterOptions";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: filterData,
      bender: "",
      nation: "",
      age: "",
    };
  }

  filterItems(val, type) {
    switch (type) {
      case "bender":
        this.setState({ bender: val });
        break;
      case "nation":
        this.setState({ nation: val });
        break;
      case "age":
        this.setState({ age: val });
        break;

      default:
        break;
    }
  }

  render() {
    var filteredItems = filterData;
    var state = this.state;
    ["bender", "nation", "age"].forEach(function (filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function (item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    let benderArray = filterData.map(function (item) {
      return item.bender;
    });
    benderArray = benderArray.filter((val, i, self) => self.indexOf(val) === i);
    let nationArray = filterData.map(function (item) {
      return item.nation;
    });
    nationArray = nationArray.filter((val, i, self) => self.indexOf(val) === i);
    let ageArray = filterData.map((item) => item.age);
    ageArray = ageArray.filter((val, i, self) => self.indexOf(val) === i);

    benderArray.unshift("");
    nationArray.unshift("");
    ageArray.unshift("");

    return (
      <div className="sandbox__container">
        <FilterOptions
          data={this.state.data}
          benderOptions={benderArray}
          nationOptions={nationArray}
          ageOptions={ageArray}
          changeOption={this.filterItems.bind(this)}
        />
        <div className="sandbox__filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    );
  }
}

export default FilterForm;
