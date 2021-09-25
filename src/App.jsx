import React from 'react';
import { useContext } from 'react/cjs/react.development';

import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MoviesContext from './context/MoviesContext';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { featuredMovie } = useContext(MoviesContext);

  return (
    <section>
      <Header />
      { featuredMovie
      && <FeaturedMovie /> }
      <MainPage />
      <Footer />
    </section>
  );
}

export default App;
