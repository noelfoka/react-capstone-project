import CountriesAPINames from '../../components/Countries/countriesAPI';
import { CountriesAction } from './countriesAction';

const getCountries = (countriesNames) => async (dispatch) => {
  const countries = await CountriesAPINames(countriesNames);

  const objectCountries = [];
  countries.forEach((country) => {
    objectCountries.push({
      country: country.country,
      cases: country.cases,
      flag: country.countryInfo.flag,
    });
  });

  dispatch(CountriesAction(objectCountries));
};

export default getCountries;
