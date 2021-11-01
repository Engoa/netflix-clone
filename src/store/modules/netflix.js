import uniqBy from "lodash/uniqBy";

const state = {
  netflix: [],
  currentMovie: [],
};

const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const mutations = {
  setNetflixData(state, payload) {
    state.netflix = uniqBy(state.netflix.concat(payload), (item) => item.id);
  },

  setCurrentMovieById(state, payload) {
    state.netflix[payload];
    state.currentMovie = [payload];
  },
};

const actions = {
  setNetflixData({ commit, state }, payload) {
    commit("setNetflixData", payload);
    saveLS("netflix", state.netflix);
  },
  setCurrentMovieById({ commit }, payload) {
    commit("setCurrentMovieById", payload);
  },
};

const getters = {
  getNetflixData: (state) => state.netflix,

  getCurrentMovie: (state) => state.currentMovie,

  getMovieById: (state) => {
    return (id) => {
      return state.netflix.find((data) => data.id === id);
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
