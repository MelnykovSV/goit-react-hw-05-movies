import axios from 'axios';

const BASE = 'https://api.themoviedb.org/3/';
const KEY = 'f5947bee69b0eabce6ba631e79612468';

export async function getData(query: string) {
  const response = await axios
    .get(query)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    })
    .finally(() => {});
  return response;
}

export async function getTrendedMovies() {
  const response = await getData(
    `${BASE}trending/all/day?api_key=${KEY}&page=1`
  );

  return response;
}

export function getMoviesByQuery(query: string) {
  return getData(`${BASE}search/movie?api_key=${KEY}&query=${query}&page=1`);
}

export function getMovieData(movieID: string) {
  return getData(`${BASE}movie/${movieID}?api_key=${KEY}`);
}

export function getMovieCast(movieID: string) {
  return getData(`${BASE}movie/${movieID}/credits?api_key=${KEY}`);
}

export function getMovieReviews(movieID: string) {
  return getData(`${BASE}movie/${movieID}/reviews?api_key=${KEY}`);
}

// `https://api.themoviedb.org/3/movie100/reviews?api_key=f5947bee69b0eabce6ba631e79612468`;

// `https://api.themoviedb.org/3/search/movie/934433?api_key=f5947bee69b0eabce6ba631e79612468`

// `https://api.themoviedb.org/3/movie/123?api_key=f5947bee69b0eabce6ba631e79612468`
