import axios from 'axios';

// const API_BASE = 'https://api.themoviedb.org/3';

const language = 'language=pt-BR';
const apiKey = `api_key=${process.env.REACT_APP_TMDB_KEY}`;

const originalsNetflix = `/discover/tv?with_network=213&${apiKey}&
  ${language}`;

const recomendados = `/trending/all/week?${apiKey}&${language}
  `;

const emAlta = `/movie/top_rated?${apiKey}&${language}`;

const acao = `/discover/movie?with_genres=28&${apiKey}&${language}`;
const comedia = `/discover/movie?with_genres=35&${apiKey}&${language}`;
const horror = `/discover/movie?with_genres=27&${apiKey}&${language}`;
const romance = `/discover/movie?with_genres=10749&${apiKey}&${language}`;
const documentario = `/discover/movie?with_genres=99&${apiKey}&${language}`;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const basicFetch = async (endpoint) => {
  try {
    const requestApi = await api.get(`${endpoint}`);
    return requestApi;
  } catch (error) {
    console.log(error.toString());
  }
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais Netflix',
      items: await basicFetch(originalsNetflix),
    },
    {
      slug: 'trending',
      title: 'Recomendados',
      items: await basicFetch(recomendados),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(emAlta),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(acao),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(comedia),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(horror),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(romance),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch(documentario),
    },
  ],
  getFeaturedMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?${apiKey}&${language}`);
          break;

        default:
          info = await basicFetch(`/movie/${movieId}?${apiKey}&${language}`);
          break;
      }
    }
    return info;
  },
};
