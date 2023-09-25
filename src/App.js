import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContinentDisplay from './components/Continents/ContinentDisplay';
import Continents from './components/Continents/Continents';
import Countries from './components/Countries/Countries';
import Navbar from './components/pages/Navbar';
import TopNav from './components/pages/TopNav';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={(
            <>
              <TopNav />
              <Continents />
            </>
          )}
        />
        <Route
          path="/:continentName"
          element={(
            <>
              <ContinentDisplay />
              <Countries />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
