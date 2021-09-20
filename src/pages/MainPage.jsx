import React, { useContext } from 'react';
import CarouselMovies from '../components/CarouselMovies';

import MoviesContext from '../context/MoviesContext';

export default function MainPage() {
  const { movieList } = useContext(MoviesContext);

  return (
    <main style={ { marginTop: '-120px' } }>
      { movieList.map((item) => (
        <section key={ item.slug }>
          <h2 style={ { margin: '0px 0px 0px 30px' } }>{ item.title }</h2>
          <CarouselMovies items={ item.items } />
        </section>
      )) }
    </main>
  );
}
