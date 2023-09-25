import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContinents } from '../../redux/continents/getContinents';
import SingleContinent from './SingleContinent';
import styles from './SingleContinent.module.css';

const Continents = () => {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  const continents = useSelector((state) => state.continentsReducer);

  useEffect(() => {
    setSearch(continents);
  }, [continents]);

  const SearchContinent = (event) => {
    setSearch(
      continents.filter((search) => search.continent.toLowerCase().includes(event.target.value)),
    );
  };

  return (
    <>
      <div className={styles.search}>
        <p>CONTINENTS STATS</p>
        <input type="text" placeholder="Continent" onChange={SearchContinent} />
      </div>
      <div className={styles.searchbody}>
        {search?.map((continent) => (
          <SingleContinent key={continent.continent} continentData={continent} />
        ))}
      </div>
    </>
  );
};

export default Continents;
