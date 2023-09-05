import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './country.css';

const Country = ({ countryDate }) => {
  const { country, cases, flag } = countryDate;

  return (
    <div className="countryContainer">
      <img src={flag} className="flag-image" alt="flagImage" />
      <p className="countryName">{country}</p>
      <p className="cases">{cases}</p>
      <FontAwesomeIcon icon={faArrowCircleRight} className="icon" />
    </div>
  );
};

Country.propTypes = {
  countryDate: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
