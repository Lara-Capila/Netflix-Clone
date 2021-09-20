import React from 'react';

import '../styles/carouselMovies.css';

export default function CarouselMovies({ items }) {
  const pathDefault = 'https://image.tmdb.org/t/p/w300';
  return (
    <section className="movieRow">
      <section className="movieRow--listarea">
        <section className="movieRow--list">
          { items.data.results.length > 0 && items.data.results.map((item) => (
            <div key={ item.id } className="movieRow--item">
              <img
                src={ `${pathDefault}${item.poster_path}` }
                alt={ item.original_title }
              />
            </div>
          )) }
        </section>
      </section>
    </section>
  );
}
