const CountriesAPINames = async (countriesNames) => {
  const data = await fetch(`https://corona.lmao.ninja/v2/countries/${countriesNames}`)
    .then((response) => response.json());

  return data;
};

export default CountriesAPINames;
