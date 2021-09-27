import React from 'react';
import { useContext } from 'react/cjs/react.development';

import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MoviesContext from './context/MoviesContext';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const { featuredMovie } = useContext(MoviesContext);

  return (
    <section>
      <Header />
      { featuredMovie
        ? <FeaturedMovie /> : <Loading /> }
      <MainPage />
      <Footer />
    </section>
  );
}

export default App;
