import * as types from "../types";

export const editMember = (payload) => ({ type: types.LOAD_MEMBER, payload });

export const editCoach = (payload) => ({ type: types.LOAD_COACH, payload });

export const clearMember = () => ({ type: types.CLEAR_DATA });

export const modalOff = () => ({
  type: types.MODAL_OFF,
});

export const modalOn = () => ({
  type: types.MODAL_ON,
});

export const filterMemberList = (payload) => ({
  type: types.FILTERED_MEMBERS,
  payload,
});
