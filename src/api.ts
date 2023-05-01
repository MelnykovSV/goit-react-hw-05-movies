import axios from 'axios';

const BASE = 'https://api.themoviedb.org/3/';
const KEY = 'f5947bee69b0eabce6ba631e79612468';

export async function getData(query: string) {
  try {
    const response = await axios.get(query);
    return response;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getTrendedMovies() {
  return getData(`${BASE}trending/all/day?api_key=${KEY}&page=1`);
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
