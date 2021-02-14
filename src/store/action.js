export const ActionType = {
  LOAD_COMPETITIONS: `LOAD_COMPETITIONS`,
  LOAD_COMPETITION_SCHEDULE: `LOAD_COMPETITION_SCHEDULE`
};

export const ActionCreator = {
  loadCompetitions: (competitions) => ({
    type: ActionType.LOAD_COMPETITIONS,
    payload: competitions
  }),
  loadCompetitionSchedule: (id) => ({
    type: ActionType.LOAD_COMPETITION_SCHEDULE,
    payload: id
  })
};
