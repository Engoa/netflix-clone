import axios from "axios";
import store from "../store";

const BASE_URL = "https://api.themoviedb.org/3/",
  API_KEY = `?api_key=${process.env.VUE_APP_API}`,
  genUrl = (apiType) => BASE_URL + apiType + API_KEY + "&",
  genFullUrl = (apiType, query = "", page = 1) =>
    genUrl(apiType) + query + `&page=${page}`;

export default {
  async discoverMovies(query, page) {
    const res = await axios.get(genFullUrl("discover/movie", query, page));
    await store.dispatch("netflix/setNetflixData", res.data.results);
    return res.data;
  },

  async trendingLastDays() {
    const res = await axios.get(genFullUrl("trending/all/day"));
    await store.dispatch("netflix/setNetflixData", res.data.results);
    return res.data;
  },

  async searchMovies(query, page) {
    const res = await axios.get(genFullUrl("search/movie", query, page));
    await store.dispatch("netflix/setNetflixData", res.data.results);
    return res.data;
  },

  async searchMovieByID(query) {
    const res = await axios.get(`${BASE_URL}movie/${query}${API_KEY}`);
    return res.data;
  },
  
  async searchMovieByIDForVideo(query) {
    const res = await axios.get(`${BASE_URL}movie/${query}/videos${API_KEY}`);
    return res.data;
  },
};
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
