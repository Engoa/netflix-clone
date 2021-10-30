const state = {
  netflix: [],
};

const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const mutations = {
  setNetflixData(state, payload) {
    state.netflix = payload;
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
