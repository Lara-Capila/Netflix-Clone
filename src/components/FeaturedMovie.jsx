import React, { useContext } from 'react';

import { IoMdAdd } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import MoviesContext from '../context/MoviesContext';
import '../styles/featuredMovie.css';

export default function FeaturedMovie() {
  const { featuredMovie } = useContext(MoviesContext);
  console.log(featuredMovie);

  const getYear = new Date(featuredMovie.data.first_air_date);
  const genresName = featuredMovie.data.genres.map((genre) => (genre.name));

  return (
    <section
      className="featured"
      style={ {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.data.backdrop_path})`,
      } }
    >
      <section className="featured--vertical">
        <section className="featured--horizontal">
          <section className="featured--name">
            { featuredMovie.data.original_name }
          </section>
          <section className="featured--info">

            <div className="featured--points">
              { featuredMovie.data.vote_average }
              { ' ' }
              Pontos
            </div>
            <div className="featured--year">
              { getYear.getFullYear() }
            </div>
            <div className="featured--seasons">
              { featuredMovie.data.number_of_seasons }
              { ' ' }
              Temporada
              { featuredMovie.data.number_of_seasons !== 1 ? 's' : '' }
            </div>
            <div className="featured--description">{ featuredMovie.data.overview }</div>
            <div className="featured--buttons">
              <button className="featured--watchbutton" type="button">
                <FaPlay className=".featured--iconwatch" />
                { ' ' }
                Assistir
              </button>
              <button className="featured--mylistbutton" type="button">
                <IoMdAdd className="featured--iconadd" />
                { ' ' }
                Minha lista
              </button>

            </div>
            <div className="featured--genres">
              <strong>Gêneros:</strong>
              { ' ' }
              { genresName.join(', ') }
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
