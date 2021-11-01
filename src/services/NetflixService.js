import axios from "axios";
import store from "../store";

const BASE_URL = "https://api.themoviedb.org/3/",
  API_KEY = `?api_key=aaf4434aae80f32eb7c2bbbc9ff754e8`,
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

  mounted() {
    console.log(genUrl);
  },
};
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
