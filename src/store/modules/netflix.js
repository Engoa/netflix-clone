import uniqBy from "lodash/uniqBy";

const state = {
  netflix: [],
};

const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const mutations = {
  setNetflixData(state, payload) {
    state.netflix = uniqBy(state.netflix.concat(payload), (item) => item.id);
  },
};

const actions = {
  setNetflixData({ commit, state }, payload) {
    commit("setNetflixData", payload);
    saveLS("netflix", state.netflix);
  },
};

const getters = {
  getNetflixData: (state) => state.netflix,

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
