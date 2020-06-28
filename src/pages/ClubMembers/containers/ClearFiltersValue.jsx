import React from "react";
import { Button } from "../../../components";
import { useDispatch } from "react-redux";
import { CLEAR_FILTERS } from "../../../redux/types";

const ClearFiltersValue = () => {
  const dispatch = useDispatch();

  const handleClearFilter = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <Button type="button" warning onClick={handleClearFilter}>
      Išvalyti filtrus
    </Button>
  );
};

export default ClearFiltersValue;
