import { GET_CONTINENT, GET_CONTINENTS } from './continentActions';

export const continentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.payload;
    default:
      return state;
  }
};

export const continentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.payload;
    default:
      return state;
  }
};
