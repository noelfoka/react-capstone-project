export const GET_CONTINENTS = 'GET_CONTINENTS';
export const GET_CONTINENT = 'GET_CONTINENT';

export const ContinentsAction = (payload) => ({
  type: GET_CONTINENTS,
  payload,
});

export const ContinentAction = (payload) => ({
  type: GET_CONTINENT,
  payload,
});
