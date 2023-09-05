import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContinentImages from './ContinentImages';
import { getContinent } from '../../redux/continents/getContinents';
import styles from './ContinentDisplay.module.css';

const ContinentDisplay = () => {
  const { continentName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinent(continentName));
  }, []);

  const { cases, continent } = useSelector((state) => state.continentReducer);

  return (
    <header>
      <div className={styles.header}>
        <img src={ContinentImages[continent]} className={styles.image} alt="continentImage" />
        <div>
          <h2>{continent}</h2>
          <p>{`TOTAL STATS: ${cases}`}</p>
        </div>
      </div>
      <div className={styles.stats}>{`STATISTICS : ${continent?.toUpperCase()}`}</div>
    </header>
  );
};

export default ContinentDisplay;
