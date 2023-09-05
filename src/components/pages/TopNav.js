import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WorldImage from './worldImages.png';
import classes from './navbar.css';

const TopNav = () => {
  const continents = useSelector((state) => state.continentsReducer);
  const [totalCases, setTotalCases] = useState(0);

  useEffect(() => {
    const totalNumber = continents?.reduce((prev, curr) => prev + curr.cases, 0);
    setTotalCases(totalNumber);
  }, [continents]);

  return (
    <header>
      <div className="header">
        <img src={WorldImage} alt="" className="image" />
        <div className={classes.textContent}>
          <h2>World Cases</h2>
          <p>{`STATS: ${totalCases}`}</p>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
