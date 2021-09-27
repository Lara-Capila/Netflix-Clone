import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MoviesContext from './MoviesContext';
import api from '../services/apiTmdb';

export default function MoviesProvider({ children }) {
  const [movieList, setMovielist] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const getAll = async () => {
      const list = await api.getHomeList();
      setMovielist(list);

      const originals = list.filter((item) => item.slug === 'originals');
      const randomChoice = Math.floor(
        Math.random() * (originals[0].items.data.results.length - 1),
      );
      const chosen = originals[0].items.data.results[randomChoice];
      const chosenInfo = await api.getFeaturedMovieInfo(chosen.id, 'tv');
      setFeaturedMovie(chosenInfo);
    };

    getAll();
  }, []);

  const context = {
    movieList,
    setMovielist,
    featuredMovie,
    setFeaturedMovie,
  };

  return (
    <MoviesContext.Provider value={ context }>
      { children }
    </MoviesContext.Provider>
  );
}

MoviesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
