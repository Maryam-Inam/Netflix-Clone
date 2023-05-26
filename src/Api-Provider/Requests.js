const API_KEY = "f46c2375a3690b7235dc725cdc3eefc7";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrigionals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top-rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
};
export default requests;
