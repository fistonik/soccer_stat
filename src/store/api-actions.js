import {ActionCreator}from "./action";
import {LEAGUE} from "../const";

export const fetchCompetitionList = () => (dispatch, _getState, api) => {
  api.get(`/competitions/?areas=${LEAGUE.AREAS}`)
    .then(({data}) => dispatch(ActionCreator.loadCompetitions(data)));
};

export const fetchCompetitionSсhedule = (id) => (dispatch, _getState, api) => {
  api.get(`/matches?competitions=${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCompetitionSchedule(data)));
};
