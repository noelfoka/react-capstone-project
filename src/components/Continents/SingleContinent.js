import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './SingleContinent.module.css';
import ContinentImages from './ContinentImages';

/* eslint-disable react/prop-types */
const SingleContinent = ({ continentData }) => {
  const navigate = useNavigate();
  const { cases, continent } = continentData;

  return (
    <button
      className={styles.continent}
      onClick={() => { navigate(`/${continent}`); }}
      type="button"
    >
      <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon} />

      <div className={styles.container}>
        <img src={ContinentImages[continent]} className={styles.contImage} alt="single continent" />
        <div>
          <h3>{continent}</h3>
          <p>{` Active Cases : ${cases}`}</p>
        </div>
      </div>
    </button>
  );
};

SingleContinent.protoTypes = {
  continentData: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    continent: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleContinent;
