import countriesReducer from '../redux/countries/reducerCountries';
import { continentsReducer, continentReducer } from '../redux/continents/reducerContinent';
import { GET_CONTINENT, GET_CONTINENTS } from '../redux/continents/continentActions';
import { GET_COUNTRIES } from '../redux/countries/countriesAction';

describe('should render redux reducers', () => {
  it('continentsReducer', () => {
    expect(continentsReducer([], { type: GET_CONTINENTS, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });

  it('continentReducer', () => {
    expect(continentReducer({}, { type: GET_CONTINENT, payload: { dat: 1 } })).toEqual({ dat: 1 });
  });

  it('countriesReducer', () => {
    expect(countriesReducer([], { type: GET_COUNTRIES, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});
