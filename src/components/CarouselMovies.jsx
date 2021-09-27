import React, { useState } from 'react';

import '../styles/carouselMovies.css';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

export default function CarouselMovies({ items }) {
  const [scrollX, setScrollX] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState('');
  console.log(trailerUrl);

  const pathDefault = 'https://image.tmdb.org/t/p/w300';

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleBeforeArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleNextArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = items.data.results.length * 200;

    if ((window.innerWidth - listWidth) >= x) {
      x = (window.innerWidth - listWidth) - 60;
    }

    setScrollX(x);
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(item?.title || item?.original_title || item?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  };

  return (
    <section className="movieRow">
      <div className="navigate--before">
        <MdNavigateBefore style={ { fontSize: 50 } } onClick={ handleBeforeArrow } />
      </div>
      <div className="navigate--next">
        <MdNavigateNext style={ { fontSize: 50 } } onClick={ handleNextArrow } />
      </div>
      <section className="movieRow--listarea">
        <section
          className="movieRow--list"
          style={ {
            marginLeft: scrollX,
            width: items.data.results.length * 200,
          } }
        >
          { items.data.results.length > 0 && items.data.results.map((item) => (
            <div key={ item.id } className="movieRow--item">
              { /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */ }
              <img
                onClick={ () => handleClick(item) }
                src={ `${pathDefault}${item.poster_path}` }
                alt={ item.original_title }
              />
            </div>
          )) }
        </section>
      </section>
      { trailerUrl
      && (
        <YouTube
          videoId={ trailerUrl }
          opts={ opts }
        />
      ) }
    </section>
  );
}
