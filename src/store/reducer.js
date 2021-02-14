import {extend} from "../utils";
import {ActionType} from "../store/action";

const initialState = {
  competitions: {},
  competitionSchedule: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMPETITIONS:
      return extend(state, {
        competitions: action.payload
      });
    case ActionType.LOAD_COMPETITION_SCHEDULE:
      return extend(state, {
        competitionSchedule: action.payload
      });
  }

  return state;
};

export {reducer};
