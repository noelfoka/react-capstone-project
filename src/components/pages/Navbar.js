import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faUserCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { continent } = useSelector((state) => state.continentReducer);

  return (
    <nav className="nav">
      {location.pathname === '/' && (
        <>
          <p>
            <b>GLOBAL PANDEMIC</b>
          </p>
          <p className="stats">WORLD COVID STATS</p>
        </>
      )}

      {location.pathname !== '/' && (
        <>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
          <p>
            <b>{continent}</b>
          </p>
          <p className="stats">{`${continent} COVID Cases`}</p>
        </>
      )}

      <FontAwesomeIcon icon={faMicrophoneAlt} />
      <FontAwesomeIcon icon={faUserCog} />
    </nav>
  );
}

export default Navbar;
