import { ContinentsAPI, ContinentNameAPI } from '../../components/Continents/ContinentsAPI';
import { ContinentsAction, ContinentAction } from './continentActions';

export const getContinents = () => async (dispatch) => {
  const continents = await ContinentsAPI();
  const objectContinents = [];

  continents.forEach((continent) => {
    objectContinents.push({
      cases: continent.cases,
      continent: continent.continent,
      countries: continent.countries,
    });
  });

  dispatch(ContinentsAction(objectContinents));
};

export const getContinent = (continentName) => async (dispatch) => {
  const continent = await ContinentNameAPI(continentName);
  const objectContinent = {
    cases: continent.cases,
    continent: continent.continent,
    countries: continent.countries,
  };

  dispatch(ContinentAction(objectContinent));
};
