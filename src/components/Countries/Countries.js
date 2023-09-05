import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCountries from '../../redux/countries/getCountries';
import Country from './Country';

const Countries = () => {
  const { countries } = useSelector((state) => state.continentReducer);
  const countriesString = countries?.toString();

  const dispatch = useDispatch();
  useEffect(() => {
    if (countriesString) {
      dispatch(getCountries(countriesString));
    }
  }, [countriesString]);

  const countriesData = useSelector((state) => state.countriesReducer);

  return (
    <section>
      {countriesData.map((country) => (<Country key={country.country} countryDate={country} />))}
    </section>
  );
};

export default Countries;
