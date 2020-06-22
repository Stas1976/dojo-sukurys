import * as types from "../types";

const initialState = {
  data: [],
  modalState: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_MEMBER:
      return {
        ...state,
        data: action.payload,
      };

    case types.CLEAR_DATA:
      return {
        ...state,
        data: [],
      };

    case types.MODAL_OFF:
      return {
        ...state,
        modalState: false,
      };

    case types.MODAL_ON:
      return {
        ...state,
        modalState: true,
      };

    default:
      return state;
  }
};

export default reducers;
