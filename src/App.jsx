import React from 'react';
import { useContext } from 'react/cjs/react.development';

import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MoviesContext from './context/MoviesContext';
import MainPage from './pages/MainPage';

function App() {
  const { featuredMovie } = useContext(MoviesContext);

  return (
    <section>
      { featuredMovie
      && <FeaturedMovie /> }
      <MainPage />
    </section>
  );
}

export default App;
